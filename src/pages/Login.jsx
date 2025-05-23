import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return setError('Invalid email');
    if (password.length < 8) return setError('Password must be at least 8 characters');
    if (!company.trim()) return setError('Company name required');

    if (email === 'user@example.com' && password === 'Password@123' && company === 'OpenAI') {
      toast.success('Login Successful! ✅ Redirecting...', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
      setTimeout(() => {
        localStorage.setItem('auth', true);
        navigate('/users');
      }, 1600);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 to-blue-600 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4 text-center">
          By logging in, you agree to our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span>.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;



