import React, { useContext, useState } from 'react';
import {
 
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';

import { Link } from 'react-router';
import { FaGoogle } from 'react-icons/fa';
import {AuthContext} from '../LogIn/Api'

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);
  const { createUser, googleLogin } = useContext(AuthContext);

  

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setSuccess(`Logged in as ${result.user.email}`);
        setError('');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;

    const pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!pattern.test(password)) {
      setError('Password must be at least 6 characters and contain letters & numbers');
      return;
    }

    setError('');
    setSuccess('');

    createUser(email, password)
     createUser(email, password)
  .then(result => {
    return updateProfile(result?.user, {
      displayName: name,
      photoURL: photo
    }).then(() => {
      return sendEmailVerification(result?.user);
    });
  })
  .then(() => {
    setSuccess('Registration successful! Please verify your email.');
    e.target.reset();
  })
  .catch(err => {
    setError(err.message);
  }).catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className="hero bg-gradient-to-r from-blue-200 via-blue-500 to-white min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold mb-4">Registration Now!</h1>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Username</label>
              <input
                type="text"
                name="name"
                className="input"
                required
              />
              
              <label className="label mt-2">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                required
              />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" required />

              <label className="label mt-2">Password</label>
              <div className="flex gap-2">
                <input
                  type={showPass ? "text" : "password"}
                  name="pass"
                  className="input flex-1"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

              <button className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="btn btn-wide mt-3 flex gap-2"
            >
              <FaGoogle /> Registration with Google
            </button>

            <p className="text-sm mt-3">
              Already have an account?{' '}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
