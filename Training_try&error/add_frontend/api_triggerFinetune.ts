import { NextApiRequest, NextApiResponse } from 'next';
import LitJsSdk from 'lit-js-sdk';
import { litActionCode } from '../../lib/litActionCode';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileHash, nftContract, tokenId } = req.body;
  
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: 'ethereum' });
  
  const result = await client.executeJs({
    code: litActionCode,
    authSig,
    jsParams: { nftContract, tokenId, fileHash }
  });

  res.status(200).json(result);
}