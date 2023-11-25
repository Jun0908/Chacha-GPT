import React, { useState, useRef } from 'react';
import { NFTStorage } from 'nft.storage';
import { ethers } from 'ethers';
import MyNFTABI from "../contracts/ABI/MyNFT.json";

function UploadFile() {
  const [imageSrc, setImageSrc] = useState(null);
  const [musicSrc, setMusicSrc] = useState(null);
  const [ipfsImageCid, setIpfsImageCid] = useState(null);
  const [ipfsMusicCid, setIpfsMusicCid] = useState(null);
  const imageInputRef = useRef(null);
  const musicInputRef = useRef(null);
  const CONTRACT_ADDRESS = "0xC633bf60370011EC2b985724273cC73258Fe66Db";
  const CONTRACT_ABI = MyNFTABI.abi; 
  const [mintHash, setMintHash] = useState(null);

  const apiKey = '';
  const client = new NFTStorage({ token: apiKey });

  const uploadToNFTStorage = async (file, setType) => {
    try {
      const cid = await client.storeBlob(file);
      console.log('CID:', cid);
      setType(cid);
    } catch (error) {
      console.error('Error uploading file to NFT Storage:', error);
    }
  };

  const handleImageInput = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        uploadToNFTStorage(file, setIpfsImageCid);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMusicInput = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match('audio.*')) {
      setMusicSrc(URL.createObjectURL(file));
      uploadToNFTStorage(file, setIpfsMusicCid);
    }
  };

  const mintNFT = async () => {
    if (!ipfsImageCid || !ipfsMusicCid) {
      console.error("Both image and music CIDs are required");
      return;
    }
  
    try {
      console.log("Starting the minting process");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
  
      console.log("Creating contract instance with address:", CONTRACT_ADDRESS);
      console.log("Using ABI:", CONTRACT_ABI);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  
      console.log("Minting NFT with image CID:", ipfsImageCid, "and music CID:", ipfsMusicCid);
      const transaction = await contract.createNFT(ipfsImageCid, ipfsMusicCid);
      await transaction.wait();
      setMintHash(transaction.hash);
      console.log("NFT Minted:", transaction.hash);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const handleGalleryButton = async () => {
    try {
      const response = await fetch('/api/triggerWorkflow');
      if (!response.ok) {
        throw new Error('GitHub Actionsのトリガーに失敗しました');
      }
      console.log('GitHub Actionsが正常にトリガーされました');
    } catch (error) {
      console.error('GitHub Actionsのトリガー中にエラーが発生しました', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100vh' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="imageInput" style={{ marginRight: '10px' }}>画像をIPFSにアップロードする</label>
        <input 
          id="imageInput"
          type="file" 
          accept="image/*" 
          onChange={handleImageInput} 
          onClick={() => imageInputRef.current.value = ''}
          ref={imageInputRef} 
        />
        {imageSrc && <img src={imageSrc} alt="Uploaded content" style={{ display: 'block', margin: '10px auto', width: '200px', height: '200px' }} />}
        {ipfsImageCid && <p>画像 CID: {ipfsImageCid}</p>}
      </div>
  
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="musicInput" style={{ marginRight: '10px' }}>音楽をIPFSにアップロードする</label>
        <input 
          id="musicInput"
          type="file" 
          accept="audio/*" 
          onChange={handleMusicInput} 
          onClick={() => musicInputRef.current.value = ''}
          ref={musicInputRef} 
        />
        {musicSrc && <audio controls src={musicSrc} style={{ display: 'block', margin: '10px auto' }} />}
        {ipfsMusicCid && (
          <div>
            <p>音楽 CID: {ipfsMusicCid}</p>
          </div>
        )}
      </div>
  
      {ipfsImageCid && ipfsMusicCid && (
        <div style={{ marginBottom: '20px', border: '2px solid black', padding: '5px' }}>
          <button onClick={mintNFT} style={{ border: 'none', background: 'none' }}>
            NFTをミントする
          </button>
        </div>
      )}
  
      <div style={{ marginBottom: '20px' }}>
        {mintHash && (
          <p>ミント完了！トランザクションハッシュ: {mintHash}</p>
        )}
      </div>
      {ipfsImageCid && ipfsMusicCid && (
      <div style={{ marginBottom: '20px', border: '2px solid black', padding: '5px' }}>
        <button onClick={handleGalleryButton} style={{ border: 'none', background: 'none' }}>
          Galleryへ
        </button>
      </div>
      )}
    </div>
  );
}
export default UploadFile;