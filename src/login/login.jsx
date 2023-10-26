import "./login.css";
import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, e.g., sending data to a server
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form">
          <label htmlFor="rememberMe">Remember Me</label>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
        </div>
        <Link to="/"> <button type="submit" className="login-button">Login</button>
</Link>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Your Password?</a>
      </div>
      <div className="signup">
  <h4>Dont have an account? <Link to="/signup">Sign up for Mumbify</Link></h4>
</div>
    </div>
  );
};

export default Login;
