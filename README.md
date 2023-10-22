### やりたいこと

## web3 Global Hackathon 2023

### [Team ChaCha-GPT (チーム ChaCha-GPT)]
https://www.spaceappschallenge.org/2023/find-a-team/nasanoahs-arch-space-administration/?fbclid=IwAR3Q7sA4fMM2bqGY5ipmh-rjsoqu5XcFxcVsp9mDcP1ytQjkeoaB7SFqLrU&tab=project)

- ChaCha
- JunK 

### Explanation / 説明

- 

### To do at this time / 技術紹介
- ERC 4337

- ChainLink
 天気やロケーションの情報を抽出

- Generative Music (Image to Music)
  携帯で撮影した写真をアップロードするとMusicが生成される
Uploading an image will generate NFTs


 [Slide / スライド](https://docs.google.com/presentation/d/1SFMJqgYY59PvGXzrFeguV166TxxNBXH3Gz5435CAzF8/edit?usp=sharing)

 [Movie in Loom/ 紹介動画 Loom](https://www.loom.com/share/eeaaa68e8877401c8e24b800f2289f13?sid=f27caf84-7cdc-4a48-bf1b-6cd09654700a)

 [Web アプリ / NFT Generation](https://astar-edition-drop.vercel.app/))
  
###  Text to Image / 文字により出力した画像
<div >
<img width="203" alt="Gene_to_Image1" src="https://github.com/Jun0908/space_app/assets/31527310/aee2d3ef-2e15-46ca-aec2-ea49594489a1">
<img width="199" alt="Gene_to_Image2" src="https://github.com/Jun0908/space_app/assets/31527310/9ae3e052-3821-4b19-89e1-23260d4f2b35">
</div>

### Text to Music / 文字により出力した音源
[音楽を再生する] (https://docs.google.com/presentation/d/1SFMJqgYY59PvGXzrFeguV166TxxNBXH3Gz5435CAzF8/edit?usp=sharing)

### How to Execute / 実行方法

- On Colab

  Stable_Diffusion_in_Colab
  - Open [stable_diffusion_in_Colab.ipynb on Colab]
  
  Mubert_Text_to_Music
  - Open [Mubert_Text_to_Music.ipynb]
 
- On Local 

```
NFT-Drop-Astar-Edition

# Clone the repository
git clone https://github.com/Jun0908/space_app.git

# Change to the project directory
cd space_app/NFT-Drop-Astar-Edition

# Install library
yarn install 

# Start the development server
yarn start
```

### File Organization / ファイル構成

- stable_diffusion_in_Colab.ipynb
  - An executable file that performs image generation on Colab.
  - Colabで画像生成を行う実行ファイル。
- Mubert_Text_to_Music.ipynb
  - An executable file that performs music generation on Colab.
  - Colabで音楽生成を行う実行ファイル。。
- NFT-Drop-Astar-Edition
  - Folder containing the Output image described above.
  - 画像のNFTを作成する実行ファイル
- sample_output_images
  - Folder containing the Output image described above.
  - 上述の Output 画像が入ったフォルダ
