import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase.cofig';
import { Link } from 'react-router';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pass.value;

    const pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!pattern.test(password)) {
      setError('Password must be at least 6 characters and contain letters & numbers');
      return;
    }

    setError('');
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setSuccess(true);
        e.target.reset();

        sendEmailVerification(result.user).then(() => {
          alert('Please verify your email');
        });
      })
      .catch(err => {
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
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">Registration successful!</p>}

              <button className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>
            <button className="btn btn-wide">Login with google <FaGoogle></FaGoogle></button>
            <p className="text-sm mt-3">
              Already have an account? <Link className="link link-primary" to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
