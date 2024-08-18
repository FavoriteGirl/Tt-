import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Forgot Password form submitted:', { email });
        setSubmitted(true);
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
                {submitted ? (
                    <p className="text-green-600 text-sm">
                        If an account with the entered email exists, a password reset link has been sent to it.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            Email Address
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mt-2 border border-gray-300 rounded"
                                placeholder="Enter your email"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Send Reset Link
                        </button>
                    </form>
                )}
                <p className="text-sm text-gray-600 mt-4">
                    Remember your password? <a href="#" className="text-orange-500">Sign In</a>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
