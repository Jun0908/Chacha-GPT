import React from "react";
import Link from 'next/link';

function Explana() {

  const styles = {
    content: {
        backgroundColor: 'fffffff',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
    section: {
        marginBottom: '20px',
        padding: '15px',
    },
    sectionHeader: {
        fontSize: '1.5em',
        color: '#0056b3',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1em',
        lineHeight: '1.6',
    },
    link: {
        color: '#007bff',
        textDecoration: 'underline',
        fontWeight: 'bold',
    }
};

return (
    <div style={styles.content}>
        <section style={styles.section} id="garalley">
            <h2 style={styles.sectionHeader}>Garalley</h2>
            <p style={styles.paragraph}>これまでに作成した画像と音楽のセットを3Dで閲覧できます。</p>
            <a href="https://3d-image-to-music.vercel.app/" style={styles.link}>Garalleyを見る</a>
        </section>

        <section style={styles.section} id="uploadipfs">
            <h2 style={styles.sectionHeader}>UploadIpfs</h2>
            <p style={styles.paragraph}>画像と音楽をIPFSにアップロードし、CID（コンテンツ識別子）を取得できます。</p>
            <a href="UploadIpfs" style={styles.link}>IPFSにアップロード</a>
        </section>

        <section style={styles.section} id="musicgen">
            <h2 style={styles.sectionHeader}>MusicGen</h2>
            <p style={styles.paragraph}>テキストから画像、画像から音楽への変換が可能です。</p>
            <a href="MusicGen" style={styles.link}>MusicGenを使う</a>
        </section>

        <section style={styles.section} id="musicmint">
            <h2 style={styles.sectionHeader}>MusicMint</h2>
            <p style={styles.paragraph}>Music Converter APIを使用して音楽を文字列に変換し、オンチェーンでミントできます。</p>
            <a href="Mint" style={styles.link}>MusicMintでミントする</a>
        </section>
    </div>
  );
}

export default Explana;
