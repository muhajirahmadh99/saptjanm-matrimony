import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const navigate = useNavigate();
  const password = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Perform login logic here
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/content");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div className="bg-center flex justify-center items-center h-screen bg-blend-multiply bg-[url('https://img.freepik.com/free-photo/navratri-decoration-with-candles_23-2151193771.jpg?t=st=1734095791~exp=1734099391~hmac=62d69254a201fd9a2d93158b3e86dc7f3629b0641027fe850d76d78cfcbba29a&w=1800')]">
      <div className="">
        <form className=" bg-black w-96 h-full px-4 py-10 opacity-80 rounded-lg" onSubmit={(e) => e.preventDefault()}>
          {!isSignInForm && (
            <div className="mb-5">
              <label className="block mb-2 text-xl font-medium text-white dark:text-white">
                Enter Your Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
          )}
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium text-white dark:text-white">
              Your email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium text-white dark:text-white">
              Your password
            </label>
            <input
              ref={password}
              autoComplete="on"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="text-red-300">{errorMessage}</div>
          <button
            onClick={handleButtonClick}
            className="text-white my-2 bg-red-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white text-lg my-4 " onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to SaptJanm? Sign up Now"
              : "Already Registered? Sign in Now"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
