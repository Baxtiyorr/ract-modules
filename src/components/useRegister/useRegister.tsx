import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterError {
  firstName: string;
  email: string;
  password: string;
  logIn: string;
}

const useRegister = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<RegisterError>({
      firstName: "",
      email: "",
      password: "",
      logIn: "", 
    });
  
    const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);
  
    const validatePassword = (password: string): boolean => password.length >= 6;
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const formValid =
        firstName && validateEmail(email) && validatePassword(password);
  
      if (!formValid) {
        setError({
          firstName: firstName ? "" : "FirstName is required >:(",
          email: validateEmail(email) ? "" : "Invalid email address >:(",
          password: validatePassword(password)
            ? ""
            : "At least your password must contain 6 characters >:(",
          logIn: "",
        });
        return;
      }
  
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      navigate("/");
      console.log("submitted");
    };

    return {
        firstName,
        email,
        password,
        error,
        handleFirstNameChange: (event: any) => {
          setFirstName(event.target.value);
          setError({ ...error, firstName: "" });
        },
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


export default useRegister;
