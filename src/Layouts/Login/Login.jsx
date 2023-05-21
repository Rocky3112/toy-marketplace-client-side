/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import { AuthCotext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthCotext);
useTitle("Login")
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true })
        form.reset("");
      })
      .catch((error) => {
        console.log(error);
        setError("Please enter the correct Email & Password");
      });
  };

  //sign in with Google

  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className=" flex-col w-96 my-10">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-amber-500">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <p className=" text-red-500">{error}</p>
              <button className="btn btn-warning">Login</button>
            </div>
          </form>
          <Link to="/registration" className="link link-primary">
            Reister Now
          </Link>
        </div>
        <div className="w-50 mt-3 ms-10">
      <div className="mx-auto">
        <img
          onClick={handleGoogleLogin}
          className=" w-72"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
    </div>
      </div>
      
    </div>
  );
};

export default Login;
