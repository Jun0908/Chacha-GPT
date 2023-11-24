import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Banana, Chains } from "@rize-labs/banana-wallet-sdk";


function Navbar() {
  useEffect(() => {
    getBananaInstance();
    }, []);

    const [isLoading, setIsLoading] = useState(false);
    const [walletInstance, setWalletInstance] = useState(null);
    const [output, setOutput] = useState("Welcome to Banana Demo");
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [bananaSdkInstance, setBananSdkInstance] = useState(null);

    const getBananaInstance = () => {
      const bananaInstance = new Banana(Chains.shibuyaTestnet);
      setBananSdkInstance(bananaInstance);
    };

    const createWallet = async () => {
      setIsLoading(true);
      const wallet = await bananaSdkInstance.createWallet();
      setWalletInstance(wallet);
      const address = await wallet.getAddress();
      setWalletAddress(address);
      setOutput("Wallet Address: " + address);
      setIsLoading(false);
      setIsConnected(true);
    };
  
    const connectWallet = async () => {
      const walletName = bananaSdkInstance.getWalletName();
      if (walletName) {
        setIsLoading(true);
        const wallet = await bananaSdkInstance.connectWallet(walletName);
        setWalletInstance(wallet);
        const address = await wallet.getAddress();
        setWalletAddress(address);
        setOutput("Wallet Address: " + address);
        setIsLoading(false);
        setIsConnected(true);
      } else {
        setIsLoading(false);
        alert("You don't have wallet created!");
      }
    };
  
  return (
    <div className="App">
    <h1>Banana SDK Demo</h1>

    {!isConnected && 
    <Flex px={"4em"} py={"1.5em"} justifyContent={"flex-end"}>
    <ConnectButton /></Flex>}

    {walletAddress && <p> Wallet Address: {walletAddress}</p>}

    {!isConnected && (
      <button className="btn" onClick={createWallet}>
        Create Wallet
      </button>
    )}

    {!isConnected && (
      <button className="btn" onClick={connectWallet}>
        Connect Wallet
      </button>
    )}
  </div>  
  );
}

export default Navbar;
