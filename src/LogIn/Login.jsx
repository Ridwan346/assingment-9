import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-r from-blue-200 via-blue-500 to white shadow-sm min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h1>Havn't any account? <span className='text-red-800'><NavLink to={'/register'}>Registretion Now</NavLink></span></h1>
      </div>
    </div>
  </div>
 </div>
        </div>
    );
};

export default Login;