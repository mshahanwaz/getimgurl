import React, { useState } from "react";
import "./GetURL.css";
import { storage } from "./../firebase";

function GetURL() {
  const [select, setSelect] = useState(0);
  const [image, setImage] = useState(null);
  const [URL, setURL] = useState("");

  const handleUpload = () => {
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      () => {},
      (error) => alert(error.message),
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => setURL(url));
      }
    );
    setSelect(1);
  };

  const handleCopy = () => {
    var textarea = document.createElement("textarea");
    textarea.textContent = URL;
    // textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="geturl">
      <div className="geturl__container">
        {URL && (
          <div className="geturl__preview">
            <img src={URL} alt={image.name} />
          </div>
        )}
        {!select && (
          <div className="geturl__select">
            <label htmlFor="geturl__input">
              {image ? image.name : "Tap to select"}
            </label>
            <input
              type="file"
              accept="image/*"
              id="geturl__input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        )}
        <div className="geturl__button">
          {!select ? (
            <button onClick={handleUpload}>get_url</button>
          ) : URL ? (
            <>
              <span id="geturl__url" contentEditable={true}>
                {URL}
              </span>
              <button onClick={handleCopy}>copy</button>
            </>
          ) : (
            <i>
              <svg
                width="50"
                height="50"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.9141 27.8618C75.154 29.8217 74.1941 32.5304 71.6917 33.5475C69.3341 34.5057 66.4209 33.3689 64.5613 30.9845C62.3864 28.196 59.6059 25.8994 56.3972 24.2871C51.1913 21.6713 45.2127 21.0348 39.5727 22.496C33.9328 23.9572 29.0153 27.4167 25.7344 32.2313C22.4536 37.0459 21.0326 42.888 21.7357 48.6716C22.4388 54.4552 25.2181 59.7867 29.5569 63.675C33.8957 67.5633 39.4988 69.7438 45.3246 69.8112C51.1504 69.8786 56.8024 67.8282 61.23 64.0413C63.9589 61.7072 66.1082 58.8113 67.5516 55.5829C68.7858 52.8224 71.3418 51.0208 73.8603 51.3862C76.5335 51.7741 78.1143 54.1739 77.3802 56.3739C75.4673 62.1064 72.0258 67.2524 67.3772 71.2284C61.208 76.5049 53.3326 79.3618 45.2152 79.268C37.0978 79.1741 29.2907 76.1358 23.2452 70.718C17.1996 65.3002 13.3271 57.8715 12.3474 49.8129C11.3678 41.7543 13.3477 33.6141 17.9191 26.9056C22.4905 20.1972 29.3423 15.3769 37.2008 13.3409C45.0593 11.3049 53.3897 12.1918 60.6434 15.8365C66.1092 18.583 70.6835 22.7545 73.9141 27.8618Z"
                  fill="#0038FF"
                  stroke="black"
                  stroke-width="3"
                />
                <mask id="path-2-inside-1" fill="white">
                  <path d="M34.7621 72.2648C33.4637 75.4504 34.9924 79.1457 38.3575 79.8596C44.5338 81.17 50.9908 80.7929 57.0325 78.7093C65.0506 75.9442 71.7917 70.3616 76.0028 62.9994C80.2139 55.6373 81.6084 46.9964 79.9271 38.6833C78.2457 30.3702 73.6029 22.9504 66.8618 17.8034C60.1207 12.6563 51.7399 10.1322 43.2775 10.7003C34.8152 11.2683 26.8469 14.8899 20.8542 20.8917C14.8615 26.8935 11.252 34.8672 10.6967 43.3305C10.2784 49.7077 11.6157 56.0359 14.5068 61.6489C16.082 64.707 20.0495 65.2082 22.7805 63.1165C25.5115 61.0247 25.932 57.1248 24.6647 53.9268C23.4432 50.8442 22.907 47.5056 23.1274 44.146C23.485 38.695 25.8098 33.5593 29.6696 29.6937C33.5293 25.8281 38.6615 23.4956 44.1119 23.1297C49.5623 22.7638 54.9601 24.3896 59.3019 27.7046C63.6437 31.0197 66.634 35.7986 67.7169 41.1529C68.7998 46.5071 67.9016 52.0724 65.1894 56.8142C62.4771 61.556 58.1353 65.1516 52.9711 66.9326C49.7882 68.0303 46.4263 68.3926 43.1308 68.0262C39.7119 67.6462 36.0605 69.0793 34.7621 72.2648Z" />
                </mask>
                <path
                  d="M34.7621 72.2648C33.4637 75.4504 34.9924 79.1457 38.3575 79.8596C44.5338 81.17 50.9908 80.7929 57.0325 78.7093C65.0506 75.9442 71.7917 70.3616 76.0028 62.9994C80.2139 55.6373 81.6084 46.9964 79.9271 38.6833C78.2457 30.3702 73.6029 22.9504 66.8618 17.8034C60.1207 12.6563 51.7399 10.1322 43.2775 10.7003C34.8152 11.2683 26.8469 14.8899 20.8542 20.8917C14.8615 26.8935 11.252 34.8672 10.6967 43.3305C10.2784 49.7077 11.6157 56.0359 14.5068 61.6489C16.082 64.707 20.0495 65.2082 22.7805 63.1165C25.5115 61.0247 25.932 57.1248 24.6647 53.9268C23.4432 50.8442 22.907 47.5056 23.1274 44.146C23.485 38.695 25.8098 33.5593 29.6696 29.6937C33.5293 25.8281 38.6615 23.4956 44.1119 23.1297C49.5623 22.7638 54.9601 24.3896 59.3019 27.7046C63.6437 31.0197 66.634 35.7986 67.7169 41.1529C68.7998 46.5071 67.9016 52.0724 65.1894 56.8142C62.4771 61.556 58.1353 65.1516 52.9711 66.9326C49.7882 68.0303 46.4263 68.3926 43.1308 68.0262C39.7119 67.6462 36.0605 69.0793 34.7621 72.2648Z"
                  fill="white"
                  stroke="black"
                  stroke-width="6"
                  mask="url(#path-2-inside-1)"
                />
              </svg>
            </i>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetURL;
