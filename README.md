
## web3 Global Hackathon 2023

### Explanation / 説明

###  Text to Image / 文字により出力した画像
<div >
<img width="393" alt="TexttoImage" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/a19c2360-4ab7-4e4f-ad92-5b51b61b06a4">
</div>

### Text to Music / 文字により出力した音源
[音楽を再生する](https://mubert.com/render/tracks/094a91f685064b0dbe1f43cb8995c063)

<img width="1004" alt="スクリーンショット 2023-10-27 0 57 55" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/b4b4bb86-eed7-4d2a-91a4-83eabe5907db">

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

### How to Execute / 実行方法

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
