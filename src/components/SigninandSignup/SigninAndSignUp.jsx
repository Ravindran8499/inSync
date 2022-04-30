import React from "react";
import "./SigninandSignup.css";

import SignUpForm from "../Signup/Signup";
import SignInForm from "../SignIn/Signin";

const SigninAndSignup = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default SigninAndSignup;
