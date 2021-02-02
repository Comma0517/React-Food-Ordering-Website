import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);
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
    <form className="uploadForm">
      <label className="uploadImage">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      {/* Progress bar */}
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default UploadForm;
