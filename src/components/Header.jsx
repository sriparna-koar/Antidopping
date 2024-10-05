import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#athletes" className="hover:text-blue-600">Athletes & support personal</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#violation" className="hover:text-blue-600">Violation</a>
          <a href="#news" className="hover:text-blue-600">News</a>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <span className="hidden md:block">Adam Joseph</span>
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;
