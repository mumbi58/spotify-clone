import "./signup.css"
import { Link } from "react-router-dom";
const Signup = () => {
    return ( 
        <div className="signup-container">
            <h2>Sign up to start listening</h2>
            <form>

            <label htmlFor="email" > Email address</label>
                <input type="text" placeholder="name@domain.com" />
                <div className="link"> 
                  <a href="phone">use phone number instead.</a>
</div>
            </form>
            <button>
  <Link to="/login">Next</Link>
</button>
        </div>
     );
}
 
export default Signup;