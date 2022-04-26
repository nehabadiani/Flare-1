import React from 'react'
import "./ForgetPass.css"

const ForgetPass = () => {
  return (
    <div class="main">

        <form method="POST" action="" class="form">

            <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>

            <h2>Forgot Password</h2>

            <div class="cointainer">
                <input class="email" type="text" name="user-id" required />
                <span>Username</span>
                <i class="fa fa-user icon fa-lg"></i>
            </div>

            <div class="button">
                <input type="submit" class="otp" value="Send OTP" name="user-otp"/>
            </div>
        </form>

    </div>
  )
}

export default ForgetPass