import React from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.css"

const SignIn = () => {
  return (
    <div class="main">

        <form method="post" action="" class="form">

            <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>

            <h2>Sign In!</h2>

            <div class="cointainer">
                <input class="inp" type="text" name="userid" required/>
                <span>E-mail</span>
                <i class="fa fa-user icon fa-lg"></i>
            </div>

            <div class="cointainer" id="password">
                <input class="inp" type="password" name="password" required/>
                <span>Password</span>
                <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
            </div>
           
            <div class="button">
                <input type="submit" class="sign-in" value="Sign In" name="sign_in"/>
            </div>

            <div class="sign-up">
                Don't have account? Click
                <Link to="/signup">
                <a href="signup.html" id="s">Sign-up</a>
                </Link>
            </div>

            <div class="forgot">
                <Link to="/forgetpass">
                <a href="forgotpassword.html" id="f">Forget Password?</a>
                </Link>
            </div>

        </form>

    </div>
  )
}

export default SignIn