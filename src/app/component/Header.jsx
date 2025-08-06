import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <header className="py-30 px-5 flex justify-between gap-10">
          <div className="w-2/3">
            <h1 className="text-5xl text-white/70 font-semibold py-4  ">
              Breath Natureal
            </h1>
            <p className="text-white/60 font-extralight  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              illo in fugit dolore ducimus eius dolores culpa consequatur
            </p>
          </div>
          <div className=" w-1/3 relative">
              <img
                src="/image1.png"
                alt=""
                className="absolute -top-[40%] right-0 w-130"
              />
            <div className="border-2 pb-10 bg-[#22291e] transform-translate border-white/20 pt-30 px-5 rounded-2xl">
                <h3 className="text-xs text-white/70 ">Trendy House Plant</h3>
                <h2 className="text-xl text-white/70 font-medium py-2">Calathea plant</h2>
                <button className="text-white/70 p-2 border px-6 py-1  border-white/70  rounded-lg ">
                    Buy Now
                </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
