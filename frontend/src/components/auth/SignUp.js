import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div class="main">

        <form method="post" action="" class="form">

            <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>

            <h2>Sign Up!</h2>

            <div class="cointainer">
                <input class="inp" type="text" name="userid" required/>
                <span>E-mail</span>
                <i class="fa fa-user icon fa-lg"></i>
            </div>

            <div class="cointainer" id="password">
                <input class="inp" type="text" name="UserName" required/>
                <span>User Name</span>
                <i class="fa fa-user icon fa-lg"></i>
            </div>

            <div class="button">
                <input type="submit" class="sign-in" value="Sign Up" name="sign_Up"/>
            </div>

            <div class="sign-up">
                Already have an account?
                <Link to="/signin">
                <a href="signin.html" id="s">Sign-In</a>
                </Link>
            </div>

        </form>

    </div>

  )
}

export default SignUp