import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  // default value is true.
  // this is being used to change the Sign in to Sign Up when it's click on the sign up now in the paragraph below..

  // const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // Validate the form data.

    const nameValue = isSignIn ? null : name.current?.value;
    checkValidData(email, password, name);

    console.log(email.current.value);
    console.log(password.current.value);
    // this let you get the data of input by the help pf ref.\

    const message = checkValidData(
      email.current.value,
      password.current.value,
      nameValue
    );
    setErrorMessage(message);
    // setting the value in the state.

    if (message) return;
    // terminate code here if it meet the condition

    // signup and signin logic

    if (!isSignIn) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

    }
  };
  return (
    <div className="flex">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="back-ground"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute  p-12 bg-black  border-white  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl opacity-85 "
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-800 text-white rounded-sm w-full"
        />
        <button
          className="p-4 my-6  bg-red-700 text-white rounded-sm w-full "
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm}>
          {isSignIn ? (
            <>
              New to Netflix?{" "}
              <span className="hover:underline cursor-pointer">
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already Exists?{" "}
              <span className="hover:underline cursor-pointer">
                Go to Sign In
              </span>
            </>
          )}
        </p>
        <p className="text-red-500 font-bold py-2"> {errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
