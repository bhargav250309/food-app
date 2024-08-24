import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

    let [currentstate,setCurrentstate] = useState("Login")

  return (
    <div className="login-popup">
        <form className="login-popup-container">
             <div className="login-popup-title">
                 <h2>{currentstate}</h2>
                 <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)}/>
             </div>
             <div className="login-popup-input">
                {currentstate==="Login"?<></>:<input type="text" placeholder="Your name" required />}
                 <input type="email" placeholder="Your email" required />
                 <input type="password required " placeholder="Password" required />
             </div>
             <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
             </div>
             {currentstate==="Login"
             ?<p>Create a new accoun? <span onClick={() => setCurrentstate("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={() => setCurrentstate("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup