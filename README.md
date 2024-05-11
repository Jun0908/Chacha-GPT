## WaveHack Global 2024

### ▶︎Overview
ChaChaCha is a Web3 service offering a "music generation protocol and music NFT storage system" to create spaces that make travel enjoyable and bring people together.

**Text to Image **　　
<div >
<img width="200" alt="TexttoImage" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/a19c2360-4ab7-4e4f-ad92-5b51b61b06a4">
</div>

**Text to Music **　　  
[Play Music](https://mubert.com/render/tracks/094a91f685064b0dbe1f43cb8995c063)

### ▶︎Problems
  
"There are many things that hinder the joy of travel." This problem encompasses a wide range of issues, including traffic jams, drowsy driving, repetitive travel, long journeys, and boring routes. There is a demand for services that make the journey itself more enjoyable using Web3 technology.
   
### ▶︎Solution
**Music Generation Protocol & On-chain Music Storage System**　　  
Our developed tool utilizes AI to easily generate music from photos taken with a smartphone. It leverages Web3 technologies such as smart contracts, NFTs, and wallets to allow anyone to issue music NFTs.

### ▶︎Technical Challenges
**No Cloud, All dApps**　　  
Generative AI is implemented without using cloud systems like AWS, GCP, or Azure, by leveraging decentralized storage via IPFS and decentralized computing with Bacalhau.
<img width="995" alt="スクリーンショット 2023-11-19 15 16 27" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/1245761b-7f1d-4a83-b505-44e0102a3a07">

**On-chain Music Data Storage**　　  
We converted music WAV data to spectrogram images and used Numpy arrays, byte sequences, and hexadecimal strings to store the music data on-chain.
<img width="876" alt="スクリーンショット 2023-11-19 15 16 53" src="https://github.com/Jun0908/Chacha-GPT/assets/31527310/af792ae3-03d9-40b2-b2b3-bca719fd653f">

### ▶︎Creativity 
**Using the Banana SDK**    
We designed a mechanism that allows general users to use the system even without a MetaMask wallet.  

**Open Generative AI Platform**        
All information about the generative AI model and image-to-music generation is publicly available. This allows users to share conditions for generation and utilize the system for analysis or research purposes.  

### ◎TechStack

| Title                          |                                                                                                                                                                                                                 詳細 |
| :----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Smart Contract Wallet(ERC4337) | We implemented a Smart Contract Wallet utilizing ERC4337 to enable end users to manage ERC6551 securely without incurring gas fees or requiring Web3 literacy. |
| Banana SDK                     | 
We used the Banana SDK to enable access to the Astar Network and Shibuya Testnet via RainbowKit. |

**Implementation Status**

| Title          |                                                              URL |
| :------------- | ---------------------------------------------------------------: |
| Pitch Movie     |                                     [https://youtu.be/XpNz4fmwth4](https://www.youtube.com/watch?v=-fRZuS5v80M) |
| Demo Movie      |                                      [https://youtu.be/zmENJzrxZRw](https://www.youtube.com/watch?v=0oHdkLbcIxo)|
| Pitch Doc    |   [chachacha-presentation](https://www.canva.com/design/DAF0lv7bab0/lUwJe3yP5UTyCEDb0UN5nA/edit?utm_content=DAF0lv7bab0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) |
| Demo Site     |                                 [chachacha-demo](https://next-app-umber-kappa.vercel.app/) | 
| Contract   | [chachacha-contracts](https://github.com/Jun0908/Chacha-GPT/tree/main/hardhat) |
| Frontend |         [chachacha-front](https://github.com/Jun0908/Chacha-GPT/tree/main/next-app) |
| Garally　　 |         [chachacha-garally](https://3d-image-to-music.vercel.app/) |

**Contract**

| contract                   |                                                                                                                   contract address |
| :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| Shibuya Testnet        | [0xe954ea332AB52700C7291B548c93ABA22fCd8409](https://shibuya.subscan.io/account/0xe954ea332AB52700C7291B548c93ABA22fCd8409) |
| zKatana Testnet    | [0x6E9b1850C671C488937Cb555A4fe0334d472Ac41](https://zkatana.blockscout.com/address/0x6E9b1850C671C488937Cb555A4fe0334d472Ac41) |

