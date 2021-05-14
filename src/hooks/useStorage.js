import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../Firebase";
// eslint-disable-next-line
const useStorage = (
  file,
  imageText,
  amountLeft,
  imageLabel,
  price,
  desc,
  cat
) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        //  const text = imageText;
        // eslint-disable-next-line
        await collectionRef.add({
          url,
          createdAt,
          imageText,
          amountLeft,
          imageLabel,
          price,
          desc,
          cat,
        });
        setUrl(url);
      }
    ); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
