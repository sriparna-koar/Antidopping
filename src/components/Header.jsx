import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="transition duration-200 hover:text-blue-400">About</a>
          <a href="#athletes" className="transition duration-200 hover:text-blue-400">Athletes & Support</a>
          <a href="#education" className="transition duration-200 hover:text-blue-400">Education</a>
          <a href="#violation" className="transition duration-200 hover:text-blue-400">Violation</a>
          <a href="#news" className="transition duration-200 hover:text-blue-400">News</a>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <span className="hidden md:block text-gray-300">Adam Joseph</span>
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-blue-400 transition duration-300 transform hover:scale-105 hover:border-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
