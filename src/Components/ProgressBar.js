import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({
  file,
  setFile,
  imageText,
  setImageText,
  amountLeft,
  setAmountLeft,
  imageLabel,
  setImageLabel,
}) => {
  const { progress, url } = useStorage(file, imageText, amountLeft, imageLabel);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
