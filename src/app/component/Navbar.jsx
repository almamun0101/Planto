"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      // Prevent closing when clicking menu button
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative z-50">
      <div className="container">
        <nav className="flex p-5 lg:p-5 text-white/80 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <img src="/logo.png" alt="logo" />
            <h2 className="font-[inter] font-bold text-2xl">Planto.</h2>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-6">
            <li className="hover:text-white hover:scale-110 transition duration-300">
              <a href="">Home</a>
            </li>
            <li className="flex items-center hover:scale-110 hover:text-white transition duration-300">
              <a href="">Plants Type</a>
              <IoIosArrowDown />
            </li>
            <li className="hover:text-white hover:scale-110 transition duration-300">
              <a href="">More</a>
            </li>
            <li className="hover:text-white hover:scale-110 transition duration-300">
              <a href="">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`lg:hidden absolute top-20 left-0 w-full bg-green-600 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col pl-10 gap-6 py-4">
              <li className="hover:text-white transition duration-300 p-2">
                <a href="">Home</a>
              </li>
              <li className="flex items-center hover:text-white transition duration-300 p-2">
                <a href="">Plants Type</a>
                <IoIosArrowDown />
              </li>
              <li className="hover:text-white transition duration-300 p-2">
                <a href="">More</a>
              </li>
              <li className="hover:text-white transition duration-300 p-2">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          {/* Icons + Menu Button */}
          <ul className="flex gap-5 items-center">
            <li className="hover:text-white hover:scale-105 transition duration-300">
              <FaSearch size={15} />
            </li>
            <li className="hover:text-white hover:scale-105 transition duration-300">
              <MdOutlineShoppingBag size={20} />
            </li>
            <li className="hover:text-white hover:scale-105 transition duration-300">
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <BiMenuAltRight size={25} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
