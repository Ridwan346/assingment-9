import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import {AuthContext} from '../LogIn/Api'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
     const { googleLogin, loginUser } = useContext(AuthContext);
  let Handlegoogle = () =>{
      googleLogin()
      .then(result => {
        setSuccess(`Logged in as ${result.user.email}`);
        setError('');
      })
      .catch(err => {
        setError(err.message);
      });
  }
  let handleWithEmailPass = (e) =>{
     e.preventDefault();
      const email = e.target.email.value;
    const password = e.target.pass.value;
    setError('')
    setSuccess('')
     loginUser(email ,password)
      .then((result) => {
      setSuccess(`Login successful as ${result.user.email}`);
    })
     .catch(error=>{setError(error.message)})
     

  }
    return (
        <div>
            <div className="hero bg-gradient-to-r from-blue-200 via-blue-500 to white shadow-sm min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleWithEmailPass}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required  />
          <label className="label">Password</label>
          <input name='pass' type="password" className="input" placeholder="Password" required  />
          <div><NavLink to={'/forget'}><a className="link link-hover">Forgot password?</a></NavLink></div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
         <button
                     onClick={Handlegoogle}
                     className="btn btn-wide mt-3 flex gap-2"
                   >
                     <FaGoogle /> Log In with Google
                   </button>
        <h1>Havn't any account? <span className='text-red-800'><NavLink to={'/register'}>Registretion Now</NavLink></span></h1>
      </div>
    </div>
  </div>
 </div>
        </div>
    );
};

export default Login;