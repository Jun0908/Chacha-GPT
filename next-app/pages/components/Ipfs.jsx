import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import IpfsABI from "../../contracts/ABI/IPFSImageStorage.json";

const Ipfs = () => {
    const [contract, setContract] = useState(null);
    const [cid, setCid] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const init = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contractAddress = '0x5fC2E4fd997EEd11897d6Aa27F33c3bEA8C82f7F'; // コントラクトのアドレスを設定
            const contractABI = IpfsABI.abi; // コントラクトのABIを設定 
            const ipfsImageContract = new ethers.Contract(contractAddress, contractABI, signer);
            setContract(ipfsImageContract);
        };

        init();
    }, []);

    const registerCID = async () => {
        if (!cid) return;
        try {
            const transaction = await contract.registerCID(cid);
            await transaction.wait();
            alert('CID registered successfully!');
        } catch (error) {
            console.error(error);
            alert('Error registering CID');
        }
    };
    /*
    const fetchImage = async () => {
        if (!cid) return;
        try {
            const addr = await contract.getAddressForCID(cid);
            if (addr !== '0x0000000000000000000000000000000000000000') {
                setImageSrc(`https://${cid}.ipfs.nftstorage.link/`);
            } else {
                alert('CID not found');
            }
        } catch (error) {
            console.error(error);
            alert('Error fetching image');
        }
    };
    */
    const fetchImage = () => {
      if (!cid) {
          toast({
              title: "Error",
              description: "Please enter a CID",
              status: "error",
              duration: 4000,
              isClosable: true,
              position: "bottom-right",
          });
          return;
      }
      setImageSrc(`https://${cid}.ipfs.nftstorage.link/`);
  };

    return (
        <div>
            <h1>IPFS Image Registration</h1>
            <input 
                type="text" 
                placeholder="Enter IPFS CID" 
                value={cid} 
                onChange={(e) => setCid(e.target.value)} 
            />
            <button onClick={registerCID}>Register CID</button>
            <button onClick={fetchImage}>Fetch Image</button>
            {imageSrc && <img src={imageSrc} alt="IPFS Image" />}
        </div>
    );
};

export default Ipfs;