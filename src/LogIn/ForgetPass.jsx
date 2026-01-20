import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../LogIn/Api';

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  // Login page থেকে আসা email
  const initialEmail = location.state?.email || '';

  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    resetPassword(email)
      .then(() => {
        setSuccess('Password reset email sent. Check your Gmail.');
        window.location.href = 'https://mail.google.com';
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
         
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 via-blue-500 to-white">
       
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>

          <form onSubmit={handleReset}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

            <button className="btn btn-neutral w-full mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
