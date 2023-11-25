import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.jobType === 'helloWorld') {
      // Hello World ジョブの実行
      execHelloWorldJob(res);
    } else if (req.body.jobType === 'imageGen') {
      // 画像生成ジョブの実行
      execImageGenJob(req.body.prompt, res);
    } else  if (req.body.jobType === 'musicGen') {
      // 音楽生成ジョブの実行
      execMusicGen(req.body.cid, res);
    } else {
      res.status(400).json({ message: '不正なjobTypeです' });
    }
  } else {
    res.status(400).json({ message: 'POSTリクエストのみ受け付けます' });
  }
}

function execHelloWorldJob(res) {
  exec('bacalhau docker run ubuntu echo Hello World', (error, stdout, stderr) => {
    handleExecResponse(error, stdout, stderr, res);
  });
}

function execImageGenJob(prompt, res) {
  const command = `bacalhau docker run --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "${prompt}"`;
  exec(command, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
    if (error) {
      console.error(`実行時のエラー: ${error}`);
      return res.status(500).json({ message: `エラー: ${error.message}` });
    }
    // 画像ファイルのパスを指定
    const imagePath = path.join('outputs', 'image0.png');
    if (fs.existsSync(imagePath)) {
      const image = fs.readFileSync(imagePath, 'base64');
      res.status(200).json({ image: `data:image/png;base64,${image}` });
    } else {
      res.status(404).json({ message: '画像が見つかりません' });
    }
  });
}

function execMusicGen(cid, res) {
  const command = `bacalhau docker run --gpu 1 jun0908/image-music-app:latest -- python3 app.py --o ./outputs --ipfs_link "${cid}"`;
  exec(command, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
    if (error) {
      console.error(`実行時のエラー: ${error}`);
      return res.status(500).json({ message: `エラー: ${error.message}` });
    }

    const cidMatch = stdout.match(/CID: (\S+)/); // CIDの抽出
    const response = { stderr: stderr };
    if (cidMatch && cidMatch[1]) {
      response.cid = cidMatch[1];
    }

    res.status(200).json(response);
  });
}

function handleExecResponse(error, stdout, stderr, res) {
  if (error) {
    console.error(`実行時のエラー: ${error}`);
    return res.status(500).json({ message: `エラー: ${error.message}` });
  }

  const jobIdMatch = stdout.match(/Job ID: (\S+)/);
  const response = { stderr: stderr };
  if (jobIdMatch && jobIdMatch[1]) {
    response.jobId = jobIdMatch[1];
  }

  res.status(200).json(response);
}