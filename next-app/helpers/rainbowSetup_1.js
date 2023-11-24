import { chain, createClient, configureChains } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// Astar Networkの設定
const astar = {
  id: 592, // Astar NetworkのチェーンID
  name: 'Astar',
  network: 'astar',
  rpcUrls: {
    default: 'https://rpc.astar.network:8545', // Astar NetworkのRPC URL
  },
  blockExplorers: {
    default: { name: 'Astar Block Explorer', url: 'https://blockscout.com/astar' },
  },
  testnet: false,
};

// Shibuya Networkの設定
const shibuya = {
  id: 81, // Shibuya NetworkのチェーンID
  name: 'Shibuya',
  network: 'shibuya',
  rpcUrls: {
    default: 'https://rpc.shibuya.astar.network:8545', // Shibuya NetworkのRPC URL
  },
  blockExplorers: {
    default: { name: 'Shibuya Block Explorer', url: 'https://blockscout.com/shibuya' },
  },
  testnet: true,
};

export const { chains, provider } = configureChains(
  [
    chain.polygonMumbai,
    chain.mainnet,
    chain.goerli,
    chain.rinkeby,
    chain.optimism,
    chain.arbitrum,
    chain.polygon,
    chain.localhost,
    chain.hardhat,
    astar, // Astarネットワークを追加
    shibuya, // Shibuyaネットワークを追加
  ],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider(),
    // JSON RPCプロバイダーをカスタムチェーンに対して追加
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === astar.id) return astar.rpcUrls.default;
        if (chain.id === shibuya.id) return shibuya.rpcUrls.default;
        return chain.rpcUrls.default;
      }
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Web3 Kit",
  chains,
});
export const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});
