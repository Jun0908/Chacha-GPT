
## Space App Yokohama 2023 in Japan / 横浜

### [Team Noah's Ark Space Administration (チームノアの方舟)]
https://www.spaceappschallenge.org/2023/find-a-team/nasanoahs-arch-space-administration/?fbclid=IwAR3Q7sA4fMM2bqGY5ipmh-rjsoqu5XcFxcVsp9mDcP1ytQjkeoaB7SFqLrU&tab=project)

- Mr. Matsubara (松原さん)
- Me, Kawai (河合(記))

### Choice Theme / 選択したテーマ

- [Building the Space Biology “Model Zoo”](https://www.spaceappschallenge.org/2023/challenges/building-the-space-biology-model-zoo/?tab=resources)

- [Immersed in the Sounds of Space”](https://www.spaceappschallenge.org/2023/challenges/immersed-in-the-sounds-of-space/)

### Explanation / 説明書き

- 宇宙のどの時間＆どの場所により、
既存の生物がどのような遺伝変化が起きたのかをブロックチェーンに刻む
どのような未知の生物と人類が遭遇したのかDatasetを作る

- Record the genetic variations of existing organisms based on the time and location in space using blockchain technology. Create a dataset documenting encounters between unknown organisms and humans.

### To do at this time / 今回やったこと
- Fine Tuning Generative Art 
その生物が持っている特有の遺伝子を入力するとその生物が出力される　例えば、肌の色 耳が大きさなど
By inputting the unique genetic traits that an organism possesses, such as genes specific to humans like "large ears," the system will output an image of that organism.

- Generative NFT 
imageをアップロードするとNFTが生成される
Uploading an image will generate NFTs


 [Slide / スライド](https://docs.google.com/presentation/d/1SFMJqgYY59PvGXzrFeguV166TxxNBXH3Gz5435CAzF8/edit?usp=sharing)

 [Movie in Loom/ 紹介動画 Loom](https://www.loom.com/share/eeaaa68e8877401c8e24b800f2289f13?sid=f27caf84-7cdc-4a48-bf1b-6cd09654700a)

 [Web アプリ / Web App on HuggingFace Space](https://huggingface.co/spaces/KJMAN678/create_alien_on_mars)
 
 [Web アプリ / NFT Generation](https://astar-edition-drop.vercel.app/))
  

###  Gene to Image / 遺伝子配列により出力した画像

<div >
<img width="203" alt="Gene_to_Image1" src="https://github.com/Jun0908/space_app/assets/31527310/aee2d3ef-2e15-46ca-aec2-ea49594489a1">
<img width="199" alt="Gene_to_Image2" src="https://github.com/Jun0908/space_app/assets/31527310/9ae3e052-3821-4b19-89e1-23260d4f2b35">
</div>

### Gene to Music / 遺伝子配列により出力した音源
[音楽を再生する] <audio controls src="https://github.com/ytyaru/Audio.Sample.201708031714/tree/master/20170803/wav/CMajor.wav"></audio>
https://drive.google.com/file/d/19XA71p0JYiEdcOf8ELbSd8rMhidQeYl7/view?usp=drive_link

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

### In near future we accomplish / 将来的にやりたいこと
- Genetics　Code to Image
将来的には遺伝子入力すると該当の生き物の絵が表示されるようになり、
未知の生物の遺伝子を入力しても学習データから未知の生物が表示されるようになる。
Inputting the genetic code of an organism will display an image of that creature. Even when the genetic code of an unknown organism is entered, an image of the unknown creature will be generated based on learned data.

- Add cosmic time and latitude & longitude in the University to the NFT Stamp / NFTスタンプに宇宙の時間と場所を追加する
Julian Date / ユリウス日 Cosmic Time / コズミックタイム  Relativistic Time　/ 相対論的時間
Heliocentric Coordinate System / 太陽系座標系  Galactic Coordinate System / 銀河座標系

### Reference site / 参考サイト

- [【AI】Mubert text to musicでテキストから作曲してみた！【音楽自動生成】](https://wakabaclass.com/2023/01/17/ai_mubert-text-to-music/)
- [【Stable Difussion Web UI】自分でLoRAデータを作成！](https://zenn.dev/laiso/articles/7af434269ffa1b)
