import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";




const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="flex p-5 text-white/80 items-center justify-between">
          <div className="flex  items-center gap-5 ">
            <img src="/logo.png" alt="logo" />
            <h2 className="font-[inter] font-bold text-2xl ">Planto. </h2>
          </div>
          <ul className="flex gap-6 ">
            <li className="hover:text-white hover:scale-110 transition duration-300">
              <a href="">Home</a>
            </li>
            <li className="flex items-center hover:scale-110 hover:text-white transition duration-300">
              <a href="">Plants Type </a>
              <IoIosArrowDown />
            </li>
             <li className="hover:text-white  hover:scale-110 transition duration-300">
          
              <a href="">More</a>
            </li>
             <li className="hover:text-white hover:scale-110 transition duration-300">
          
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="">
            <ul className="flex gap-5 items-center  ">
                <li className="hover:text-white hover:scale-110 transition duration-300 "><FaSearch size={15}/></li>
                <li className="hover:text-white hover:scale-110 transition duration-300 "><MdOutlineShoppingBag size={20}/></li>
                <li className="hover:text-white hover:scale-110 transition duration-300 "><BiMenuAltRight size={25}/></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
