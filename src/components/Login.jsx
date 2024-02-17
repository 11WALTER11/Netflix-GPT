import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleisSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const message = validateForm(email, password);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="banner"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            required
            name="name"
            className="p-4 my-4 w-full rounded-lg bg-gray-600"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          required
          name="email"
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
          name="password"
          autoComplete="off"
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
        />
        <p className="text-red-600 text-xl">{errorMessage}</p>
        <button
          onSubmit={(e) => e.preventDefault()}
          onClick={handleSubmit}
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={toggleisSignInForm}
            className="cursor-pointer text-gray-600"
          >
            {isSignInForm ? " Sign Up Now" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
