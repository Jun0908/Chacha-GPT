import React from "react";
import { Flex, Link, Box, Text, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NextLink from "next/link";

function Navbar() {
  return (
    <>
      <Flex px={"4em"} py={"1.5em"} alignItems="center" justifyContent="space-between">
        {/* ロゴ */}
        <Box display="flex" alignItems="center">
          <Image src="logo.png" alt="Logo" width={50} height={50} />
          <Text ml={3} fontSize="xl" fontWeight="bold">ChaChaCha</Text>
        </Box>

        {/* リンク */}
        <Box>
          <NextLink href="/" passHref>
            <Link mr={4}>Home</Link>
          </NextLink>
          <NextLink href="/UploadIpfs" passHref>
            <Link mr={4}>UploadIpfs</Link>
          </NextLink>
          <NextLink href="/MusicGen" passHref>
            <Link mr={4}>MusicGen</Link>
          </NextLink>
          <NextLink href="/Mint" passHref>
            <Link mr={4}>MusicMint</Link>
          </NextLink> 
        </Box>

        {/* Connectボタン */}
        <ConnectButton />
      </Flex>
    </>
  );
}

export default Navbar;