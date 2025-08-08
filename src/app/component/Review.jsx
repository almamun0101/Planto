import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack , IoIosArrowForward  } from "react-icons/io";


const users = [
  { img: "user2.png", name: "Maxn Raval", rating: 4 },
  { img: "user3.png", name: "Venely Kl", rating: 3 },
  { img: "user4.png", name: "Lii Thakur", rating: 5 },
];

const Review = () => {
  return (
    <div className="container pb-24">
      <div className="flex justify-center mt-20 py-20">
        <h2 className="relative text-center inline-block text-4xl font-semibold p-6">
          Customer Review
          <span
            className="absolute w-1/3 h-1/2 top-0 border-r-4 border-t-4 right-0"
            style={{
              borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
              borderStyle: "solid",
            }}
          ></span>
          <span
            className="absolute w-1/3 h-1/2 bottom-0 left-0 border-l-4 border-b-4 rounded-4xl"
            style={{
              borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
              borderStyle: "solid",
            }}
          ></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {users.map((u, i) => (
          <div
            key={i}
            className="curved-edge bg-white/10 w-full h-80 rounded-4xl backdrop-blur-2xl"
          >
            <div className="pt-20 px-10 pb-10 rounded-4xl">
              <div className="flex items-center gap-4">
                <img
                  src={u.img}
                  alt={u.name}
                  className="hover:scale-110 transform duration-300 w-20 rounded-full"
                />
                <div>
                  <h2 className="text-white font-medium">{u.name}</h2>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) =>
                      i < u.rating ? (
                        <FaStar key={i} className="text-yellow-300" />
                      ) : (
                        <CiStar key={i} className="text-yellow-300" />
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="pt-4 text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                iusto magnam ipsam totam voluptate vitae eius nesciunt dicta
                porro asperiores.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20 py-20">
        <h2 className="relative text-center inline-block text-4xl font-semibold p-6">
          Our Best o2
          <span
            className="absolute w-1/3 h-1/2 top-0 border-r-4 border-t-4 right-0"
            style={{
              borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
              borderStyle: "solid",
            }}
          ></span>
          <span
            className="absolute w-1/3 h-1/2 bottom-0 left-0 border-l-4 border-b-4 rounded-4xl"
            style={{
              borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
              borderStyle: "solid",
            }}
          ></span>
        </h2>
      </div>

      <div className="w-full mt-30 flex justify-between items-center  border border-white/20  rounded-4xl backdrop-blur-xl  ">
        <div className="relative w-full mx-auto">
          <img
            src="/image1.png"
            alt="image2"
            className="w-full absolute -top-100 left-0 hover:scale-110 transform duration-300"
          />
        </div>
        <div className="p-20 ">
          <h2 className="text-xl font-bold">
            We Have Small And Best O2 Plants Collection’s
          </h2>
          <p className="text-white/70 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-white/70 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
       
          <div className="mt-20 flex items-center gap-5 justify-between">
            <button className="hover:scale-110  duration-300 border text-white/70 hover:text-white transform border-white/70 rounded-lg px-10  py-2">
              {" "}
              Explore
            </button>
            <div className=" flex items-center  p-3 rounded-2xl gap-2">
            <IoIosArrowBack />
            <span>01</span>
            <span>/</span>
            <span className="text-xs  font-extralight text-white/70 px-1">04</span>
            <IoIosArrowForward />

            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-7 gap-2 z-10">
        <div className="w-2 h-2 z-10 bg-white rounded-full hover:w-5 transform duration-300"></div>
        <div className="w-2 h-2 bg-white rounded-full hover:w-5 transform duration-300"></div>
        <div className="w-2 h-2 bg-white rounded-full hover:w-5 transform duration-300"></div>
      </div>
    </div>
  );
};

export default Review;
