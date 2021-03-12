import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageText, setImageText] = useState(null);
  const [amountLeft, setAmountLeft] = useState(null);
  const [imageLabel, setImageLabel] = useState(null);
  const [price, setPrice] = useState(null);
  const [desc, setDesc] = useState(null);
  const [cat, setCat] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Vælg venligst en jpg eller png fil");
    }
  };

  return (
    <>
      <form className="uploadForm">
        <h1>Upload en ret</h1>
        <label className="uploadImage">
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="textForm">
          <div className="form-control">
            <label htmlFor="imageText">Titel : </label>
            <input
              type="text"
              id="imageText"
              name="imageText"
              value={imageText}
              onChange={(e) => setImageText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Beskrivelse : </label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="cat">Kategori : </label>
            <input
              type="text"
              id="cat"
              name="cat"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="imageLabel">Billede label : </label>
            <input
              type="text"
              id="imageLabel"
              name="imageLabel"
              value={imageLabel}
              onChange={(e) => setImageLabel(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="imageLabel">Pris i DKK : </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        {/* Progress bar */}
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && (
            <ProgressBar
              file={file}
              setFile={setFile}
              imageText={imageText}
              setImageText={setImageText}
              amountLeft={amountLeft}
              setAmountLeft={setAmountLeft}
              imageLabel={imageLabel}
              setImageLabel={setImageLabel}
              price={price}
              setPrice={setPrice}
              desc={desc}
              setDesc={setDesc}
              cat={cat}
              setCat={setCat}
            />
          )}
        </div>
      </form>
    </>
  );
};
export default UploadForm;
