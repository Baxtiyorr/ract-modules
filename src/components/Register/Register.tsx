import useRegister from '../useRegister/useRegister';
import './Register.scss'
import { useState } from "react";

const Register = () => {
  const {
    firstName,
    email,
    password,
    error,
    handleSubmit,
    handleFirstNameChange,
    handleEmailChange,
    handlePasswordChange,
  } = useRegister();
  const [passcode, setPasscode] = useState<string>('password');

  const handleClick = () => {
    if (passcode === 'password') {
      setPasscode('text');
    } else {
      setPasscode('password');
    }
  };

  return (
    <>
      <div className="register-wrapper">
        <h1>Create an account</h1>
        <form id='succeed' onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={handleFirstNameChange} value={firstName}/>
          {error.firstName && <p className='error_text'>{error.firstName}</p>}
          <input type="email" placeholder="E-mail" onChange={handleEmailChange} value={email}/>
          {error.email && <p className='error_text'>{error.email}</p>}
          <input type={passcode} placeholder="Password" onChange={handlePasswordChange} value={password}/>
          {error.password && <p className='error_text'>{error.password}</p>}
        </form>

        <div className="btn_wrapper">
          <button type="submit" form='succeed' className="reg_btn">Reg</button>
          <button onClick={handleClick} className="show">Show password</button>
        </div>
      </div>
    </>
  );
};

export default Register;