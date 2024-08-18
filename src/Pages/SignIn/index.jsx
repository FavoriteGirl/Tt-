import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackdropImage from "../../assets/images/backdrop.jpg"

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen relative justify-center items-center">
       <img src={BackdropImage} alt="Passport" className="absolute inset-0 object-cover w-full h-full opacity-50" />
     <div className='absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center'>
     <div className="max-w-md w-full p-4 bg-white bg-opacity-40 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter your email"
            />
          </label>
          <label className="block mb-2">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Enter your password"
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-2">
          
            <Link to="/forgotpassword" className="text-orange-700">
              Forgot Password?
            </Link>
         
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-orange-700">Sign Up</Link>
        </p>
      </div>
     </div>
    </div>
  );
}

export default SignIn;