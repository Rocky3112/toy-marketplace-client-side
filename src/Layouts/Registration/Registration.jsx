/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthCotext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Registration = () => {
    const {user, createUser,updateUser} = useContext(AuthCotext)
    const[error, setError] =useState("");

  const handleRegister = event =>{
    event.preventDefault()

    const form = event.target;
    const name= form.name.value;
    const email= form.email.value;
    const password= form.password.value;
    const photo= form.photo.value;


    if(password.length<6){
      setError("Password must be 6 char");
      
      return;
    }
    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;

      updateUser(loggedUser, name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
      console.log(loggedUser);
      form.reset('')
      setError('')
    
    })
    .catch(error =>{
      console.log(error);
      
    })
}
    return (
        <div>
            <div className="hero min-h-screen">
  <div className=" flex-col w-96 my-10 bg-slate-200 rounded-lg">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-amber-500">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile URL</span>
          </label>
          <input type="text" name='photo' placeholder="profile url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <p className=' text-red-400'>{error}</p>
          <button className="btn btn-warning">Register</button>
        </div>
      </form>
      <Link to="/login" className='link link-primary'>
       Already have an account? Login
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;