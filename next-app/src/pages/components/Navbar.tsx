import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NextLink from "next/link";

function Navbar() {
  const flexStyle: React.CSSProperties = {
    padding: "1.5em 4em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const textStyle: React.CSSProperties = {
    marginLeft: "0.75em",
    fontSize: "1.25em",
    fontWeight: "bold",
  };

  const linkStyle: React.CSSProperties = {
    marginRight: "1em",
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div style={flexStyle}>
      {/* ロゴ */}
      <div style={boxStyle}>
        <img src="logo.png" alt="Logo" width={50} height={50} />
        <span style={textStyle}>ChaChaGPT</span>
      </div>

      {/* リンク */}
      <div>
        <NextLink href="/" passHref legacyBehavior>
          <a style={linkStyle}>Home</a>
        </NextLink>
        <NextLink href="/UploadIpfs" passHref legacyBehavior>
          <a style={linkStyle}>UploadIpfs</a>
        </NextLink>
        <NextLink href="/MusicGen" passHref legacyBehavior>
          <a style={linkStyle}>MusicGen</a>
        </NextLink>
        <NextLink href="/Mint" passHref legacyBehavior>
          <a style={linkStyle}>MusicMint</a>
        </NextLink>
      </div>

      {/* Connectボタン */}
      <ConnectButton />
    </div>
  );
}

export default Navbar;

