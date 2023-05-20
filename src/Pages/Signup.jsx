import React from 'react';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { setUserId } from "firebase/analytics";


const Signup = () => {

  // const { RegExp } = window;

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const [error, setError] = useState("");

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
          setError("Password not valid need 8 char ");
          return;}


        console.log(email, password);
        
        createUser( email, password)
        .then(result => {
            const user = result.user;
            navigate("/")
            console.log(user);
        })
        .catch(err => console.log(err))
    }

    // google 

    const handleGoogleSignIn = () => {
        
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate("/")
            setUserId(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
        // navigate("/")
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
              {/* <img src={img} alt="" /> */}
            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl text-center font-bold text-orange-600">
                  Sign Up
                </h1>
  
                {/* form ////////////////  */}
  
                <form onSubmit={handleSignup}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e-mail"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <p className="text-red-400 text-center p-2">{error}</p>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      name="submit"
                      value="Sign up"
                    />
                  </div>
                </form>
                {/* gooogle  */}

                <div className="text-center">
                <button className='bg-green-500 px-7 py-2 rounded text-white' onClick={handleGoogleSignIn}>Google Signup </button>
                </div>
  
                <p className="my-4 text-center text-sm">
                  Already a member{" "}
                  <Link to="/login" className="text-orange-600 font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Signup;