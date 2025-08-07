import React from "react";
import { GiShoppingBag } from "react-icons/gi";
const products = [
  { img: "/image1.png" },
  { img: "/image2.png" },
  { img: "/image4.png" },
  { img: "/image5.png" },
  { img: "/image6.png" },
  { img: "/image7.png" },
];
const Selling = () => {
  return (
    <div>
      <div className="container pt-20">
        <div className=" flex justify-center py-20">
          <h2 className="relative text-center inline-block text-4xl  font-semibold p-6 ">
            Our Top Selling
            <span
              className="absolute w-1/3 h-1/2 top-0 border-r-5 border-t-5  right-0 "
              style={{
                borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
                borderStyle: "solid",
              }}
            ></span>
            <span
              className="absolute w-1/3 h-1/2 bottom-0 left-0 border-l-5 border-b-5 rounded-4xl "
              style={{
                borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
                borderStyle: "solid",
              }}
            ></span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-20">
          {products.map((p) => (
            <div className="text-white/70 border mt-30 -rounded-t-full bbackdrop-blur-lg bg-white/10 rounded-4xl p-10 px-15 relative flex items-center justify-center ">
              <img src={p.img} alt="" className="absolute -top-[40%] " />
              <div className="">
                <h2 className="pt-50 text-2xl font-medium ">Calathea plant</h2>
                <p className="py-5 text-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl">Rs. 359/-</h2>
                  <div className="border border-white/70 p-3 rounded-2xl">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selling;
