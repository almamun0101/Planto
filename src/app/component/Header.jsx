import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="container bg-[url(/bg.png)] w-full h-[100vh] mx-auto bg-cover bg-no-repeat ">
        <header className="py-30 px-5 flex justify-between gap-10">
          <div className="w-2/3">
            <h1 className="text-5xl text-white/70 font-semibold py-4  ">
              Breath Natureal
            </h1>
            <p className="text-white/60 font-extralight  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              illo in fugit dolore ducimus eius dolores culpa consequatur
            </p>
            <div className="mt-5 flex items-center gap-5">
              <button className="border text-white/70 hover:text-white transform border-white/70 rounded-lg px-10  py-2">
                {" "}
                Explore
              </button>
              <button className=" text-white/70 hover:text-white transform rounded-lg px-10  py-2 flex items-center gap-3 text-xl">
                <IoPlayCircleOutline size={50} />
                Live Demo
              </button>
            </div>
          </div>
          <div className=" w-1/3 relative">
            <img
              src="/image1.png"
              alt=""
              className="absolute -top-[20%] right-0 w-130 z-10"
            />
            <div className="border-2  backdrop-blur-xs border-white/20 pt-35 px-5 rounded-4xl">
              <h3 className="text-xs text-white/70 ">Trendy House Plant</h3>
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white/70 font-medium py-2">
                  Calathea plant
                </h2>
                <MdKeyboardArrowRight />
              </div>
              <button className="text-white/70 p-2 border px-6 py-1  border-white/70  rounded-lg ">
                Buy Now
              </button>
              <div className="flex items-center justify-center my-7 gap-2">
                <div className="w-2 h-2 bg-white rounded-full hover:w-5 transform duration-300"></div>
                <div className="w-2 h-2 bg-white rounded-full hover:w-5 transform duration-300"></div>
                <div className="w-2 h-2 bg-white rounded-full hover:w-5 transform duration-300"></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
