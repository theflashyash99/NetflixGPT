import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  // default value is true.
  // this is being used to change the Sign in to Sign Up when it's click on the sign up now in the paragraph below the below.

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div className="flexsss">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="back-ground"
        />
      </div>
      <form className=" absolute  p-12 bg-black  border-white  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl opacity-85 ">
        <h1 className="font-bold text-3xl py-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
        />
        <button className="p-4 my-6  bg-red-700 text-white rounded-sm w-full ">
         {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm}>
  {isSignIn ? (
    <>
      New to Netflix?{" "}
      <span className="hover:underline cursor-pointer">Sign Up Now</span>
    </>
  ) : (
    <>
      Already Exists?{" "}
      <span className="hover:underline cursor-pointer">Go to Sign In</span>
    </>
  )}
</p>

      </form>
    </div>
  );
};

export default Login;
