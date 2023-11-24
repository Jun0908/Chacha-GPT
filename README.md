## Web3 Global Hackathon 2023

### ▶︎概要
ChaChaChaは、車での移動が楽しくなり、人々が集まることができる場所を創出する、「音楽生成プロトコル・音楽NFT保存システム」を提供するWeb3版サービスです。

**Text to Image / 文字により出力した画像**　　
<div >
<img width="200" alt="TexttoImage" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/a19c2360-4ab7-4e4f-ad92-5b51b61b06a4">
</div>

**Text to Music / 文字により出力した音源**　　  
[音楽を再生する](https://mubert.com/render/tracks/094a91f685064b0dbe1f43cb8995c063)

### ▶︎課題
**Mazda**    
「移動の感動を妨げるものが多い」。この問題は、渋滞、居眠り運転、マンネリ化した移動、長距離移動、退屈な道中など、多岐にわたります。Web3を活用して、自動車業界に革新的な移動体験を提供し、移動自体をもっと楽しくするサービスが求められています。

**三菱地所**    
「都市では人々のつながりが希薄である」。東京丸の内エリアで働く約30万人の中で、企業や組織の垣根を超えた人々のつながりを促進する新たな価値創造の機会が必要です。

### ▶︎解決策
**音楽生成プロトコル・音楽のオンチェーン保存システム**　　  
私たちの開発したツールは、携帯電話で撮影した画像から簡単に音楽を生成するAIを利用しています。スマートコントラクト、NFT、ウォレットなど、Web3の技術を駆使し、誰でも音楽NFTを発行できるように設計されています。

### ▶︎ユーザーの視点
**Mazda**　　  
旅行先で撮影した写真を、音楽に変換することで、新しいエンターテイメント形式を提供します。生成した音楽の類似検索することで、移動中にオリジナルのBGMを流したり、今までに行ったことのない絶景地に行きたくなるといった、「ドライブが楽しくなる仕組み作り」を提供することができます。退屈を和らげ、旅の記憶を、従来とは異なる感覚で楽しむ、新たな方法を提供します。さらに、これは通勤や通学など日常の移動においても、マンネリ化を打破し、より楽しい体験へと変える可能性を秘めています。

**三菱地所**　　  
絵画を音楽に変換し、年齢や性別・人種などを超えて人々が集う場所を創出するアプローチは、新しいアートの形を通じて社会的交流を促進し、コミュニティの活性化に寄与します。このプロセスは、芸術を感じる新たな手法を提供し、異なる背景を持つ人々が、共有の興味を通じてつながる機会を生み出します。このような革新的なアートの展示は、人々を物理的に集めるだけではなく、デジタル化が進む現代においても新しい形のコミュニケーションを生み出し、文化的多様性の理解を深める効果があります。

### ▶︎技術的なチャレンジ
**No Cloud All dApps**　　  
**分散型ストレージのIPFSと分散型コンピューティングのBacalhau**を活用し、Cloud System（AWS、GCP、Azure）を使用せずにGenerative AIを実装しました。
<img width="995" alt="スクリーンショット 2023-11-19 15 16 27" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/1245761b-7f1d-4a83-b505-44e0102a3a07">

**音楽データをOnChainに保存**　　  
音楽Wavデータをスペクトラムの画像データに変換し、Numpy配列、バイト列、ヘキサデシマル文字列を用いて音楽データをオンチェーンに保存する機能を実装しました。
<img width="876" alt="スクリーンショット 2023-11-19 15 16 53" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/af792ae3-03d9-40b2-b2b3-bca719fd653f">

### ▶︎Creativity 
**Banana SDKの利用**    
MetaMaskのWallterを持っていなくても、一般ユーザーが利用できる仕組みにしました。    

**生成AIのオープンプラットフォーム**        
生成AIのモデルや画像Input＆音楽OutPutの情報もすべて公開されているので、生成条件についての情報を共有することができ、分析や研究の用途としても利用も可能です。   

### ◎TechStack

| Title                          |                                                                                                                                                                                                                 詳細 |
| :----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Smart Contract Wallet(ERC4337) | ERC6551 をエンドユーザーがガス代負担なし、かつ web3 のリテラシーがなくてもセキュアな Wallet 管理を実現するために ERC4337 を活用した Smart Contract Wallet を実装しました。 |
| Banana SDK                     | Astar Network & shibuya Testnetに、RainbowKitでアクセスできるようにBanana SDK  を利用しました。 |

**実装状況**

| Title          |                                                              URL |
| :------------- | ---------------------------------------------------------------: |
| ピッチ動画     |                                     [https://youtu.be/XpNz4fmwth4](https://www.youtube.com/watch?v=-fRZuS5v80M) |
| デモ動画       |                                      https://youtu.be/zmENJzrxZRw|
|  ピッチ資料    |   [chachacha-presentation](https://www.canva.com/design/DAF0lv7bab0/lUwJe3yP5UTyCEDb0UN5nA/edit?utm_content=DAF0lv7bab0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) |
| デモサイト     |                                 https://tabbit-front.vercel.app/ | 
| コントラクト   | [chachacha-contracts](https://github.com/Jun0908/Chacha-GPT/tree/main/hardhat) |
| フロントエンド |         [chachacha-front](https://github.com/Jun0908/Chacha-GPT/tree/main/next-app) |

**コントラクト**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Shibuya Testnet        | [0xe954ea332AB52700C7291B548c93ABA22fCd8409](https://shibuya.subscan.io/account/0xe954ea332AB52700C7291B548c93ABA22fCd8409) |
| zKatana Testnet    | [0x6E9b1850C671C488937Cb555A4fe0334d472Ac41](https://zkatana.blockscout.com/address/0x6E9b1850C671C488937Cb555A4fe0334d472Ac41) |

