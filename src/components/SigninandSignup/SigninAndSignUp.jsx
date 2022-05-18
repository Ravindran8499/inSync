import React from "react";
import "./SigninandSignup.css";

import SignUpForm from "../Signup/Signup";
import SignInForm from "../SignIn/Signin";

const SigninAndSignup = () => {
  return (
    <div className="authentication-container container">
      <div className="row">
        <div className="col-md mr-2 left">
          <SignInForm />
        </div>
        <div className="col-md ml-2 right">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
export default SigninAndSignup;
