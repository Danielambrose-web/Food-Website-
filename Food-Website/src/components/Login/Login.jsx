import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-container">
        <div className="title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="iputs">
            {currState==='SignUp'?<input type="text" placeholder="Name" required />:<></>}
   
          <input type="text" placeholder="Email" required />
          <input type="PassWord" placeholder="Password" required />
        </div>
        <button>{currState === "SignUp" ? "Create Account" : "Login"}</button>
        <div className="login-condition ">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
          {/* <p>already have account  <a href=""onClick={()=>setcurrState('login')}> SignIn</a></p> */}
        </div>
        {currState === "SignUp" ? (
          <p>
            Already have an account? <span onClick={()=>setcurrState('Login')}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a new account <span  onClick={()=>setcurrState('SignUp')}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
