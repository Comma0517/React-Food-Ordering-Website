import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../Firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
};
