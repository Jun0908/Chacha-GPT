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
            <p style={styles.paragraph}>You can view the sets of images and music you have created so far in 3D."</p>
            <a href="https://3d-image-to-music.vercel.app/" style={styles.link}>Go to Garalley</a>
        </section>

        <section style={styles.section} id="uploadipfs">
            <h2 style={styles.sectionHeader}>UploadIpfs</h2>
            <p style={styles.paragraph}>You can upload images and music to IPFS and obtain a CID (Content Identifier).</p>
            <a href="UploadIpfs" style={styles.link}>Upload to IPFS</a>
        </section>

        <section style={styles.section} id="musicgen">
            <h2 style={styles.sectionHeader}>MusicGen</h2>
            <p style={styles.paragraph}>Conversion from text to image and from image to music is possible.</p>
            <a href="MusicGen" style={styles.link}>MusicGen</a>
        </section>

        <section style={styles.section} id="musicmint">
            <h2 style={styles.sectionHeader}>MusicMint</h2>
            <p style={styles.paragraph}>Music Converter APIを使用して音楽を文字列に変換し、オンチェーンでミントできます。</p>
            <a href="Mint" style={styles.link}>MusicMint</a>
        </section>
    </div>
  );
}

export default Explana;
