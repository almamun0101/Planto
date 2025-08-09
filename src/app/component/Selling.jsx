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
      <div className="container md:pt-20">
        {/* Heading */}
        <div className="flex justify-center py-20">
          <h2 className="relative text-center inline-block text-4xl font-semibold p-6 text-white">
            Our Top Selling
            <span
              className="absolute w-1/3 h-1/2 top-0 right-0 border-t-[5px] border-r-[5px] rounded-tr-3xl"
              style={{
                borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
                borderStyle: "solid",
              }}
            ></span>
            <span
              className="absolute w-1/3 h-1/2 bottom-0 left-0 border-b-[5px] border-l-[5px] rounded-bl-3xl"
              style={{
                borderImage: "linear-gradient(to right, #55B000, #50790B) 1",
                borderStyle: "solid",
              }}
            ></span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {products.map((p, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white border border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Product Image */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                <img
                  src={p.img}
                  alt=""
                  className="w-40  h-40 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="pt-24 text-center">
                <h2 className="text-2xl font-medium">Calathea Plant</h2>
                <p className="py-4 text-lg text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="flex justify-between items-center mt-6">
                  <h2 className="text-3xl font-bold">Rs. 359/-</h2>
                  <button className="border border-white/70 p-3 rounded-2xl hover:bg-white/20 transition">
                    <GiShoppingBag />
                  </button>
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
