import "@rainbow-me/rainbowkit/styles.css";

import { rainbowWeb3AuthConnector } from "@/libs/RainbowWeb3authConnector";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { AppProps } from "next/app";
import { polygonMumbai } from "viem/chains";
import { configureChains, createConfig, sepolia, WagmiConfig, Chain } from "wagmi";
import { avalanche, avalancheFuji, goerli, mainnet, polygon, zkSync, zkSyncTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// カスタムチェーンの設定を定義
const mantaPacificSepoliaTestnet: Chain = {
  id: 3441006, // Manta Pacific Sepolia TestnetのチェーンID
  name: 'Manta Pacific Sepolia Testnet',
  network: 'manta-pacific-sepolia-testnet',
  nativeCurrency: {
    name: 'Manta Token',
    symbol: 'MANTA',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'] },
    public: { http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'] }, // 追加
  },
  blockExplorers: {
    default: { name: 'Manta Pacific Sepolia Testnet Explorer', url: 'https://pacific-explorer.sepolia-testnet.manta.network' },
  },
  testnet: true,
};

const mantaPacific: Chain = {
  id: 169, // Manta PacificのチェーンID
  name: 'Manta Pacific',
  network: 'manta-pacific',
  nativeCurrency: {
    name: 'Manta Token',
    symbol: 'MANTA',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://pacific-rpc.manta.network/http'] },
    public: { http: ['https://pacific-rpc.manta.network/http'] }, // 追加
  },
  blockExplorers: {
    default: { name: 'Manta Pacific Explorer', url: 'https://pacific-explorer.manta.network' },
  },
  testnet: false,
};

// get chains & publicClient data
const { chains, publicClient } = configureChains(
  [
    mainnet,
    goerli,
    sepolia,
    polygon,
    polygonMumbai,
    zkSync,
    zkSyncTestnet,
    mantaPacific,
    mantaPacificSepoliaTestnet,
  ],
  [
    alchemyProvider({ 
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? '', 
    }),
    publicProvider(),
  ]
);

// connectorsの設定
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      walletConnectWallet({ chains }),
      metaMaskWallet({ chains }),
      rainbowWeb3AuthConnector({ chains }) as any,
    ],
  },
]);

// wagmi用の設定
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

/**
 * App Component
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}