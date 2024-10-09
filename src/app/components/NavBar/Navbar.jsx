"use client"
import styles from "./navbar.css"
import React, { useState } from 'react';
import Link from 'next/link';
import { RiMoonClearFill } from "react-icons/ri";
import ThemeToToggle from "../ThemeToToggle";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const[isClicked,setIsClicked]=useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSwitch = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className={`dark:bg-dark shadow-lg p-4`}>
      <div className="container mx-auto flex justify-around items-center sm:px-0 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <p className=" hover:text-indigo-500 transition-colors duration-300">SHAHADA</p>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden ">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={` hidden lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <Link href="/">
            <p className=" hover:text-indigo-500 transition-colors duration-300 font-semibold">Home</p>
          </Link>
          <Link href="/about">
            <p className=" hover:text-indigo-500 transition-colors duration-300 font-semibold">About Us </p>
          </Link>
          <Link href="/services">
            <p className=" hover:text-indigo-500 transition-colors duration-300 font-semibold">Blog</p>
          </Link>
          <Link href="/contact">
            <p className=" hover:text-indigo-500 transition-colors duration-300 font-semibold">Contact</p>
          </Link>
        </div>
        {/*Switch Color */}
        <ThemeToToggle/>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-dark shadow-md mt-2">
          <Link href="/">
            <p className="block px-4 py-2  hover:text-indigo-500 transition-colors duration-300">Home</p>
          </Link>
          <Link href="/about">
            <p className="block px-4 py-2  hover:text-indigo-500 transition-colors duration-300">About</p>
          </Link>
          <Link href="/services">
            <p className="block px-4 py-2  hover:text-indigo-500 transition-colors duration-300">Services</p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-2  hover:text-indigo-500 transition-colors duration-300">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
