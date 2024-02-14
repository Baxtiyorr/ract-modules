import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface LoginError {
  email: string;
  password: string;
  logIn: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<LoginError>({
    email: "",
    password: "",
    logIn: "",
  });

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password: string): boolean => password.length >= 6;

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError({ ...error, email: "" });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError({ ...error, password: "" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValid = validateEmail(email) && validatePassword(password);

    if (!formValid) {
      setError({
        email: validateEmail(email) ? "" : "Invalid email address >:(",
        password: validatePassword(password)
          ? ""
          : "At least your password must contain 6 characters >:(",
        logIn: "",
      });
      return;
    }

    const registeredEmail = localStorage.getItem('email');
    const registeredPassword = localStorage.getItem('password');
    
    if (email === registeredEmail && password === registeredPassword) {
      navigate('/');
    } else {
      setError({ ...error, logIn: 'Invalid email or password' });
    }

    console.log("submitted");
  };

  return {
    email,
    password,
    error,
    handleEmailChange: (event: any) => {
      setEmail(event.target.value);
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (event: any) => {
      setPassword(event.target.value);
      setError({ ...error, password: "" });
    },
    handleSubmit,
  };
};

export default useLogin;