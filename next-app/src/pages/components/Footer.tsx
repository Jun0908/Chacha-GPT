import React from "react";


function Footer() {
  const dividerStyle: React.CSSProperties = {
    width: "80%",
    margin: "0 auto",
    borderBottom: "1px solid #e2e8f0",
  };

  const containerStyle: React.CSSProperties = {
    padding: "2rem 0",
  };

  return (
    <>
      <div style={dividerStyle}></div>
      <div style={containerStyle}>
        {/* コンテンツをここに追加 */}
      </div>
    </>
  );
}

export default Footer;
