import React, { useState, useRef } from 'react'
import './QRGenerator.css'

const QRGenerator = () => {
    const [QRLink, setQRLink] = useState("");
    const [inputText, setInputText] = useState("");
    const [isQRFound, setIsQRFound] = useState(false)
    const [hasError, setHasError] = useState(false);

    const generateQR = () => {
        if (inputText.length > 0) {
            setQRLink(
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                inputText
            );
            setIsQRFound(true);
            setHasError(false)
        } else {
                setHasError(true);
            setTimeout(() => {
                setHasError(false);
            }, 1000)
        }
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }

  return (
    <div className="generator">
      <p>Enter text/URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        onChange={handleInputChange}
        id="qrText"
        className={hasError ? "error" : ""}
      />

      <div id="imgBox" className={isQRFound ? "show-img" : ""}>
        <img src={QRLink} alt="" />
      </div>
      <button onClick={generateQR}>Generate QR Code</button>
    </div>
  );
}

export default QRGenerator