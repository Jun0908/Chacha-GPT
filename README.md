## web3 Global Hackathon 2023

### Explanation / 概要
ChaChaChaは、車での移動が楽しくなり、人々が集まることができる場所を創出する、「音楽生成プロトコル・音楽NFT保存システム」を提供するWeb3版サービスです。

###  Text to Image / 文字により出力した画像
<div >
<img width="393" alt="TexttoImage" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/a19c2360-4ab7-4e4f-ad92-5b51b61b06a4">
</div>

### Text to Music / 文字により出力した音源
[音楽を再生する](https://mubert.com/render/tracks/094a91f685064b0dbe1f43cb8995c063)

### 課題
- Mazda: 「移動の感動を妨げるものが多い」。この問題は、渋滞、居眠り運転、マンネリ化した移動、長距離移動、退屈な道中など、多岐にわたります。Web3を活用して、自動車業界に革新的な移動体験を提供し、移動自体をもっと楽しくするサービスが求められています。

- 三菱地所: 「都市では人々のつながりが希薄である」。東京丸の内エリアで働く約30万人の中で、企業や組織の垣根を超えた人々のつながりを促進する新たな価値創造の機会が必要です。

### 解決策
- 音楽生成プロトコル・音楽のオンチェーン保存システム
私たちの開発したツールは、携帯電話で撮影した画像から簡単に音楽を生成するAIを利用しています。スマートコントラクト、NFT、ウォレットなど、Web3の技術を駆使し、誰でも音楽NFTを発行できるように設計されています。

### ユーザーの視点
- Mazda: 旅行先で撮影した写真を音楽に変換し、新しいエンターテイメント形式を提供。移動中にオリジナルのBGMを流し、ドライブを楽しくする仕組みを提供します。

- 三菱地所: 絵画を音楽に変換して、年齢や性別・人種を超えた人々の交流を促す場所を創出します。これにより、コミュニティの活性化に寄与し、新しいアートの形を通じて社会的交流を促進します。

### 技術的なチャレンジ
- No Cloud All dApps
- 分散型ストレージのIPFSと分散型コンピューティングのBacalhauを活用し、Cloud System（AWS、GCP、Azure）を使用せずにGenerative AIを実装しました。
- 音楽データをOnChainに保存
- 音楽Wavデータをスペクトラムの画像データに変換し、Numpy配列、バイト列、ヘキサデシマル文字列を用いて音楽データをオンチェーンに保存する機能を実装しました。

### ◎TechStack

| Title                          |                                                                                                                                                                                                                 詳細 |
| :----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Token Bound Account (ERC6551)  |                                      ERC6551 は NFT(ERC721)を従来の Wallet のような役割として活用できる新しい企画です。今回はエンドユーザーが Wallet を持っていなくても、Wallet 機能を活用できるように実装しました。 |
| Smart Contract Wallet(ERC4337) |                                           ERC6551 をエンドユーザーがガス代負担なし、かつ web3 のリテラシーがなくてもセキュアな Wallet 管理を実現するために ERC4337 を活用した Smart Contract Wallet を実装しました。 |
| PatchWallet/LitProtocol        | エンドユーザーが Wallet を持つ前に、事業者がメールアドレスに紐づいた Wallet アドレスを特定すること、そしてエンドユーザーがメール認証だけで Wallet を持てるようにするために、PatchWallet/LitProtocol を活用しました。 |

**実装状況**

| Title          |                                                              URL |
| :------------- | ---------------------------------------------------------------: |
| ピッチ動画     |                                     https://youtu.be/XpNz4fmwth4 |
| デモ動画       |                                    https://youtu.be/zmENJzrxZRw |
| デモサイト     |                                 https://tabbit-front.vercel.app/ |
| コントラクト   | [tabbit-contracts](https://github.com/tabbitme/tabbit-contracts) |
| フロントエンド |         [tabbit-front](https://github.com/tabbitme/tabbit-front) |

**コントラクト**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Shibuya Testnet        | [0x6caDAc1546075162EA91ba726AaefCEA86a91493](https://blockscout.com/astar/address/0xFe055AeD04B5b1aBbD5ea7b4DF329a2B4E24A21A#code) |
| zKatana Testnet    | [0x7337Ea73Ff4A6127b305D030884F4c0800648643](https://blockscout.com/astar/address/0xC74399208F6Ea056d69Ad09a33eB25eAf8493a2b#code) |

