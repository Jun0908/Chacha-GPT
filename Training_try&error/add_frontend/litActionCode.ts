export const litActionCode = `
  const checkNftAndTriggerShell = async (nftContract, tokenId, fileHash) => {
    const userAddress = await LitActions.getUserAddress();
    const nftOwned = await LitActions.checkNftOwnership(nftContract, tokenId, userAddress);
    
    if (nftOwned) {
      const response = await LitActions.uploadToIPFS(fileHash);
      const shellResponse = await fetch("http://yourserver:5000/finetune", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ file_hash: fileHash })
      });
      return await shellResponse.text();
    } else {
      return "NFT ownership verification failed.";
    }
  };

  checkNftAndTriggerShell("0xYourNftContractAddress", "YourTokenId", "YourFileHash");
`;
