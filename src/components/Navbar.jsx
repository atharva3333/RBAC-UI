import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import ProfilePic from '../assets/image1.png';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between p-1 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
        <img src={Logo} className=' h-12'/>
        </h1>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={toggleNavbar}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Search Bar, Notification, and Profile Section */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col lg:flex-row lg:space-x-4 lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none lg:hidden`}
        >
          {/* Search Bar */}
          <div className="relative w-full lg:w-auto mb-3 lg:mb-0">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 pr-4 py-2 w-full lg:w-64 border rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Notification Icon */}
          <div className="flex justify-center items-center mb-3 lg:mb-0 lg:mr-4">
            <IoIosNotifications className="text-2xl text-gray-600" />
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop View Items */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-64">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 pr-4 py-2 w-full border rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Notification Icon */}
          <IoIosNotifications className="text-2xl text-gray-600" />

          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
