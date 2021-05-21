import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

const useForm = (callback, validate) => {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
  });
  // eslint-disable-next-line
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.password !== values.password2) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(values.email, values.password);

      setIsSubmitting(true);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return { handleChange, handleSubmit, values, loading, error };
};

export default useForm;
