// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// const UserList = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const observer = useRef();
//   const lastUserElementRef = useCallback((node) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading]);

//   const fetchUsers = async () => {
//     setLoading(true);
//     const res = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
//     const data = await res.json();
//     setUsers((prev) => [...prev, ...data.results]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("auth")) navigate("/");
//     fetchUsers();
//   }, [page]);

//   const handleLogout = () => {
//     localStorage.removeItem("auth");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">User List</h2>
//         <button onClick={handleLogout} className="btn">Logout</button>
//       </div>
//       <div className="grid grid-cols-1 gap-4">
//         {users.map((user, index) => {
//           if (users.length === index + 1) {
//             return (
//               <div ref={lastUserElementRef} key={user.login.uuid} className="card">
//                 {user.name.first} {user.name.last} - {user.email}
//               </div>
//             );
//           } else {
//             return (
//               <div key={user.login.uuid} className="card">
//                 {user.name.first} {user.name.last} - {user.email}
//               </div>
//             );
//           }
//         })}
//       </div>
//       {loading && <div className="text-center mt-4">Loading...</div>}
//     </div>
//   );
// };

// export default UserList;


// pages/UserList.jsx
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const observer = useRef();
//   const navigate = useNavigate();

//   const fetchUsers = async () => {
//     setLoading(true);
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=10&_page=${page}`);
//     if (response.data.length === 0) {
//       setHasMore(false);
//     } else {
//       setUsers(prev => [...prev, ...response.data]);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [page]);

//   const lastUserRef = useCallback(
//     (node) => {
//       if (loading || !hasMore) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           setPage((prev) => prev + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading, hasMore]
//   );

//   const logout = () => {
//     localStorage.removeItem('auth');
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
//       <nav className="bg-blue-600 text-white py-4 shadow-md px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold">User Dashboard</h1>
//         <button
//           onClick={logout}
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
//         >
//           Logout
//         </button>
//       </nav>
//       <div className="py-10 px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">User List</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {users.map((user, index) => (
//             <div
//               ref={index === users.length - 1 ? lastUserRef : null}
//               key={user.id}
//               className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
//             >
//               <img
//                 src={`https://i.pravatar.cc/150?u=${user.id}`}
//                 alt={user.name}
//                 className="w-20 h-20 rounded-full mb-4 shadow-md"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
//               <p className="text-gray-600 text-sm">{user.email}</p>
//               <p className="text-gray-500 text-xs">{user.company?.name}</p>
//             </div>
//           ))}
//         </div>
//         {loading && <p className="text-center mt-6 text-gray-500">Loading more users...</p>}
//         {!hasMore && <p className="text-center mt-6 text-gray-500">No more users to load.</p>}
//       </div>
//     </div>
//   );
// };

// export default UserList;


import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();
  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
    const data = await res.json();
    setUsers((prev) => [...prev, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
    fetchUsers();
  }, [page, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <nav className="bg-gradient-to-r from-blue-500 to-blue-500 shadow-lg py-3  px-8 flex justify-between items-center sticky top-0 z-50 rounded-b-xl">
        <h1 className="text-white  text-2xl">User Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </nav>

      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">USER LIST</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {users.map((user, index) => {
            const fullName = `${user.name.first} ${user.name.last}`;
            if (users.length === index + 1) {
              return (
                <div
                  ref={lastUserElementRef}
                  key={user.login.uuid}
                  className="bg-white rounded-lg shadow-md p-5 flex items-center space-x-4 hover:shadow-xl transition"
                >
                  <img
                    src={user.picture.medium}
                    alt={fullName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-400">{user.location.country}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={user.login.uuid}
                  className="bg-white rounded-lg shadow-md p-5 flex items-center space-x-4 hover:shadow-xl transition"
                >
                  <img
                    src={user.picture.medium}
                    alt={fullName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-400">{user.location.country}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {loading && (
          <div className="text-center mt-8 text-blue-600 font-semibold text-lg">Loading...</div>
        )}
      </main>
    </div>
  );
};

export default UserList;
