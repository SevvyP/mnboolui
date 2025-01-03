"use client";

// components/UserProfile.js
import { useState, useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, error, isLoading } = useUser();

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) return <a href="/api/auth/login">Login</a>;

  return (
    <div
      className="relative flex items-center cursor-pointer"
      onClick={toggleDropdown}
    >
      <img
        src={user.picture}
        alt={user.name}
        className="w-10 h-10 rounded-full mr-2"
      />
      <span>{user.name}</span>
      <div
        className={`w-2.5 h-2.5 border-l-2 border-b-2 border-black dark:border-white transform transition-transform duration-300 ml-2 ${
          isOpen ? "rotate-45" : "-rotate-45"
        }`}
      ></div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full bottom-auto left-auto w-auto bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <div
            className="p-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() =>
              (window.location.href = "/settings#:~:text=Profile%20Settings")
            }
          >
            Profile Settings
          </div>
          <div
            className="p-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => (window.location.href = "/api/auth/logout")}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
