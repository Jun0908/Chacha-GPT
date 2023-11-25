import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
//import Navbar from '../components/Navbar'; 
import Navbar from '../pages/components/Navbar'; 

function MyApp({ Component, pageProps }) {
  const appInfo = {
    appName: "🦄Web3 Starter Kit",
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        coolMode
        appInfo={appInfo}
        chains={chains}
      >
        <ChakraProvider>
        <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
