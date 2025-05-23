// import React from 'react'
// import { useState } from 'react';


// const App = () => {

//   const [fullName,setFullName]=useState('')
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=('')
//   const [confirmPassword,setConfirmPassword]=useState('');
//   const [error,setError]=useState('')

//   function submitHandler(e){
//     e.preventDefault();
//     console.log("form submitted")

//     if(password.length <8){
//       setError('Password must be 8 character long');
//       return;
//     }
//     setFullName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   }
//   return (
//     <div className='h-screen flex items-center justify-center'>
//     <div className='bg-white rounded-lg p-6 w-96'>
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
//         <form onSubmit={(e)=>{
//           submitHandler(e)
//         }} className="flex flex-col gap-4">
//           <input
//             className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//             type="text"
//             required
//             name='fullName'
//             placeholder="Enter Name here"
//             value={fullName}
//             onChange={(e)=>{
//               setFullName(e.target.value)
//             }}
//             // value={formData.fullName}
//             // onChange={handleChanges}  
//           />
//           <input
//             className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//             type="email"
//             required
//             placeholder="Enter Your Email"
//             name='email'
//             value={email}
//             onChange={(e)=>{
//               setEmail(e.target.value)
//             }}
//             // value={formData.email}
//             // onChange={handleChanges}
//           />
//           <input
//             className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//             type="password"
//             required
//             name='password'
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e)=>{
//               setPassword(e.target.value)
//             }}
//             // value={formData.password}
//             // onChange={handleChanges}
//           />
//           <input
//           required
//             className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//             type="password"
//             name='confirmPassword'
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e)=>{
//               setConfirmPassword(e.target.value)
//             }}
//             // value={formData.confirmPassword}
//             // onChange={handleChanges}
//           />

//             {error && (
//               <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
//             )}
          
//           <button onSubmit={(e)=>submitHandler(e)}
//             className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3"
//           >
//             Submit
//           </button>
//         </form>

//         <p className="text-xs text-gray-600 mt-4 text-center">
//           By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
//         </p>
//       </div>
     
//     </div>
    
//   </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import UserList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
