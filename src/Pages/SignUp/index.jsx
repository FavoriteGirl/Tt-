import React, { useState } from 'react';
import PassportImage from '../../assets/images/passport.jpg';
import { Link } from 'react-router-dom';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up form submitted:', {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    });
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex h-screen justify-center items-center relative">
      <img src={PassportImage} alt="Passport" className="absolute inset-0 object-cover w-full h-full opacity-50" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        <div className="max-w-md w-full p-6 bg-white bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label className="block mb-2">
                  First Name
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 text-sm text-gray-700"
                    placeholder="Enter your first name"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block mb-2">
                  Last Name
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 text-sm text-gray-700"
                    placeholder="Enter your last name"
                  />
                </label>
              </div>
            </div>
            <label className="block mb-2">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 text-sm text-gray-700"
                placeholder="Enter your username"
              />
            </label>
            <label className="block mb-2">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-sm text-gray-700"
                placeholder="Enter your email"
              />
            </label>
            <label className="block mb-2">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-sm text-gray-700"
                placeholder="Enter your password"
              />
            </label>
            <label className="block mb-2">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 text-sm text-gray-700"
                placeholder="Confirm your password"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account? <Link to= "/login" className="text-orange-500">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;