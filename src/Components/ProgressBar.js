import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({
  file,
  setFile,
  imageText,
  amountLeft,
  imageLabel,
  price,
}) => {
  const { progress, url } = useStorage(
    file,
    imageText,
    amountLeft,
    imageLabel,
    price
  );

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
