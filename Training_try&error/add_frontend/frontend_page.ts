import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);
    
    const ipfsResponse = await fetch('https://ipfs.infura.io:5001/api/v0/add', {
      method: 'POST',
      body: formData,
    });
    
    const ipfsResult = await ipfsResponse.json();
    const fileHash = ipfsResult.Hash;

    const response = await fetch('/api/triggerFinetune', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fileHash, nftContract: '0xYourNftContractAddress', tokenId: 'YourTokenId' })
    });
    
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Trigger Fine-tuning</button>
    </div>
  );
}
