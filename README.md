### やりたいこと
- Biconomy & Astar
- Astar & Wasmを使いこなす
- Astar zkEVM
- 画像がIPFSにアップロードされる
- FineTuningした学習DataをHuggingFaceにアップロードする

## web3 Global Hackathon 2023

### [Team ChaCha-GPT (チーム ChaCha-GPT)]
https://www.spaceappschallenge.org/2023/find-a-team/nasanoahs-arch-space-administration/?fbclid=IwAR3Q7sA4fMM2bqGY5ipmh-rjsoqu5XcFxcVsp9mDcP1ytQjkeoaB7SFqLrU&tab=project)
- ChaCha
- JunK 

### Explanation / 説明

- 

### To do at this time / 技術紹介
- ERC 4337 & Biconomy 


- Generative Music (Image to Music)
  携帯で撮影した写真をアップロードするとMusicが生成される
Uploading an image will generate NFTs


 [Slide / スライド](https://docs.google.com/presentation/d/1SFMJqgYY59PvGXzrFeguV166TxxNBXH3Gz5435CAzF8/edit?usp=sharing)

 [Movie in Loom/ 紹介動画 Loom](https://www.loom.com/share/eeaaa68e8877401c8e24b800f2289f13?sid=f27caf84-7cdc-4a48-bf1b-6cd09654700a)

 [Web アプリ / NFT Generation](https://astar-edition-drop.vercel.app/))
  
###  Text to Image / 文字により出力した画像
<div >
<img width="393" alt="TexttoImage" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/a19c2360-4ab7-4e4f-ad92-5b51b61b06a4">
</div>

### Text to Music / 文字により出力した音源
[音楽を再生する](https://mubert.com/render/tracks/094a91f685064b0dbe1f43cb8995c063)

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
