import React, { useState, useRef } from 'react';
import MusicGen from './MusicGen';
import { NFTStorage, File } from 'nft.storage';

function UploadFile() {
  const [imageSrc, setImageSrc] = useState(null);
  const [ipfsImageSrc, setIpfsImageSrc] = useState(null);
  const [ipfsCid, setIpfsCid] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false); // ファイルが選択されたかどうか
  const [isUploaded, setIsUploaded] = useState(false); // アップロードが完了したかどうか
  const fileInputRef = useRef(null);
  const [fileToUpload, setFileToUpload] = useState(null); // アップロードするファイル
  const [showMusicGen, setShowMusicGen] = useState(false); // MusicGenを表示するためのステート

  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI1ZGQ2MUNEMjVmZDgxM0MyNEQ1YUNFNThjZDYwNzQ4OGFiQzE1N2UiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NjI5NjQxODU1MiwibmFtZSI6InRlc3QifQ.CEtfoZZhcLJiKF6GW3SYw4gI3bAJveVDp5U8odEcf4M';
  const client = new NFTStorage({ token: apiKey });

  const uploadToNFTStorage = async () => {
    if (!fileToUpload) return;

    setIsUploaded(false); // アップロードが開始される前にリセット
    try {
      const cid = await client.storeBlob(fileToUpload);
      console.log('CID:', cid);
      setIpfsCid(cid);
      setIpfsImageSrc(`https://ipfs.io/ipfs/${cid}`);
      setIsUploaded(true); // アップロードが成功したらtrueに設定
    } catch (error) {
      console.error('Error uploading file to NFT Storage:', error);
      setIsUploaded(false); // エラーが発生した場合はfalseを維持
    }
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('Image loaded.');
        setImageSrc(e.target.result);
        setFileToUpload(file); // アップロードするファイルをセット
        setIsFileSelected(true); // ファイルが選択されたことを示す
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
      setIsFileSelected(false);
    }
  };

  const handleNextClick = () => {
    setShowMusicGen(true); // MusicGenコンポーネントを表示する
  };

  if (showMusicGen) {
    return <MusicGen imageSrc={ipfsImageSrc} cid={ipfsCid} />; // MusicGenコンポーネントを表示
  }

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileInput} 
        onClick={() => fileInputRef.current.value = ''}
        ref={fileInputRef} 
      />
      {imageSrc && <img src={imageSrc} alt="Uploaded content" style={{ width: '200px', height: '200px' }} />}
      {isFileSelected && (
        <button onClick={uploadToNFTStorage}>
          IPFSに保存
        </button>
      )}
      {isUploaded && (
        <div>
          <p>CID画像: {ipfsCid}</p>
          <img src={ipfsImageSrc} alt="IPFS content" style={{ width: '200px', height: '200px' }} />
          <button onClick={handleNextClick}>
            次へ
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadFile;