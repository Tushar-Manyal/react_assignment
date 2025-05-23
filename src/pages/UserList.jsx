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
