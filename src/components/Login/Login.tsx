import { Link } from "react-router-dom";
import './Login.scss'

import useLogin from "../useLogin/useLogin";

const Login = () => {
  const { email, password, handlePasswordChange, handleEmailChange, handleSubmit, error } = useLogin();
  return (
    <>
      <div className="form_wrapper">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}> 
          <input type="text" placeholder='E-mail adress' onChange={handleEmailChange} value={email}/>
          {error.email && <p className="error-text">{error.email}</p>}
          <input type="password" placeholder='Password' onChange={handlePasswordChange} value={password}/>
          {error.password && <p className="error-text">{error.password}</p>}
          {error.logIn && <p className="error-text">{error.logIn}</p>}
          <button type='submit' className='login_btn'>Log in</button>
        </form>
        <div className="links">
          <Link to={`/`}>Forgot password?</Link>
          <Link to={`/register`}>Sign up</Link>
        </div>
      </div> 
    </>
  );
};

export default Login;