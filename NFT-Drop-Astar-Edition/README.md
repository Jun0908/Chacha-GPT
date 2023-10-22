# Customizable Edition Drop Minting Page

In this template, we build a page where users can claim NFTs from the [Edition Drop](https://portal.thirdweb.com/pre-built-contracts/edition-drop) contract.

## Tools

- [**Edition Drop**](https://portal.thirdweb.com/pre-built-contracts/edition-drop): Create a collection of ERC-1155 NFTs and release them to users under [claim conditions](https://portal.thirdweb.com/pre-built-contracts/edition-drop#minting--claiming-nfts).
- [**React SDK**](https://docs.thirdweb.com/react): to enable users to connect their wallets with the [useMetamask](https://portal.thirdweb.com/react/react.usemetamask) hook, and access hooks such as [useNFTDrop](https://portal.thirdweb.com/react/react.usenftdrop) to interact with the NFT drop contract.
- [**TypeScript SDK**](https://docs.thirdweb.com/typescript): to view the claimed supply, total supply, and mint NFTs from the drop.

## Using This Repo

To create your own version of this template, you can use the following steps:

Run this command from the terminal to clone this project:

```bash
npx thirdweb create --template edition-drop
```

```bash
import { Astar } from "@thirdweb-dev/chains";
```

```bash
// Put Your Edition Drop Contract address from the dashboard here
const myEditionDropContractAddress = "<smart-contract-address-here>";
// Put your token ID here
const tokenId = 0;
```

```bash
npm run dev
```

### 1. Deploy Your Own Edition Drop on thirdweb

Head to the [dashboard](https://thirdweb.com/dashboard) and create your own **Edition Drop** contract.

You can learn how to do that with our guide [Release an NFT drop on your own site without writing any code](https://portal.thirdweb.com/guides/release-an-nft-drop-with-no-code#create-a-drop-contract).

Be sure to configure a **name**, **description**, and **image** for your NFT drop in the dashboard.

