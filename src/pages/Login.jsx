// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [company, setCompany] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.includes("@")) return setError("Invalid email");
//     if (password.length < 6) return setError("Password too short");
//     if (!company) return setError("Company name required");

//     if (email === "user@example.com" && password === "password123" && company === "OpenAI") {
//       localStorage.setItem("auth", true);
//       navigate("/users");
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
//         <h2 className="text-2xl mb-4">Login</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" className="input mt-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <input type="text" placeholder="Company Name" className="input mt-2" value={company} onChange={(e) => setCompany(e.target.value)} required />
//         <button type="submit" className="btn mt-4 w-full bg-blue-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// pages/Login.jsx
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



// pages/Login.jsx
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     password: '',
//     confirmPassword: '',
//     email: ''
//   });

//   const [error, setError] = useState('');

//   const handleChanges = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

// //   const submitHandler = (e) => {
// //     e.preventDefault();

// //     if (formData.password.length < 8) {
// //       setError('Password must be 8 characters long');
// //       return;
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       setError('Password and Confirm Password must match');
// //       return;
// //     }
// //     if (!/[!@#$%^&*()<>.,"]/.test(formData.password)) {
// //       setError('Password must contain a special character');
// //       return;
// //     }
// //     if (!/[A-Z]/.test(formData.password)) {
// //       setError('Password must contain a capital letter');
// //       return;
// //     }

// //     setError('');
// //     setFormData({
// //       fullName: '',
// //       email: '',
// //       password: '',
// //       confirmPassword: ''
// //     });

// //     toast.success('Login Successful! ✅ Redirecting...', {
// //       position: 'top-right',
// //       autoClose: 1500,
// //       hideProgressBar: false,
// //       closeOnClick: false,
// //       pauseOnHover: false,
// //       draggable: true,
// //       progress: undefined,
// //       theme: 'dark',
// //       onClose: () => navigate('/users')
// //     });
// //   };
// const submitHandler = (e) => {
//     e.preventDefault();
  
//     if (formData.password.length < 8) {
//       setError('Password must be 8 characters long');
//       return;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError('Password and Confirm Password must match');
//       return;
//     }
//     if (!/[!@#$%^&*()<>.,"]/.test(formData.password)) {
//       setError('Password must contain a special character');
//       return;
//     }
//     if (!/[A-Z]/.test(formData.password)) {
//       setError('Password must contain a capital letter');
//       return;
//     }
  
//     setError('');
//     setFormData({
//       fullName: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
  
//     toast.success('Login Successful! ✅', {
//       position: 'top-right',
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//       progress: undefined,
//       theme: 'dark',
//     });
  
//     // Navigate after short delay so toast is visible
//     setTimeout(() => {
//       navigate('/users');
//     }, 1200);
//   };

//   return (
//     <>
//       <div className='h-screen flex items-center justify-center'>
//         <div className='bg-white rounded-lg p-6 w-96'>
//           <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
//             <form onSubmit={submitHandler} className="flex flex-col gap-4">
//               <input
//                 className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 type="text"
//                 required
//                 name='fullName'
//                 placeholder="Enter Name here"
//                 value={formData.fullName}
//                 onChange={handleChanges}
//               />
//               <input
//                 className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 type="email"
//                 required
//                 placeholder="Enter Your Email"
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChanges}
//               />
//               <input
//                 className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 type="password"
//                 required
//                 name='password'
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleChanges}
//               />
//               <input
//                 required
//                 className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 type="password"
//                 name='confirmPassword'
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChanges}
//               />

//               {error && (
//                 <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
//               )}

//               <button
//                 className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3"
//               >
//                 Submit
//               </button>
//             </form>

//             <p className="text-xs text-gray-600 mt-4 text-center">
//               By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
//             </p>
//           </div>
//           <ToastContainer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
