import React from "react";
const Cards = () => {
  return (
  <div
  className="team my-20"
  >
      <div className=" w-full px-10 py-10 ">
      <h3 className=" md:text-5xl text-4xl font-bold">
        MY RECENT <span className="text-[#00ADB5]">WORKS</span>
      </h3>
      <div className="flex gap-4 py-5">
        <button className="md:px-4 px-1 md:py-2 md:rounded-full rounded-md  text-sm bg-[#00ADB5]">ALL</button>
        <button className="md:px-4 px-1 md:py-2 md:rounded-full rounded-md text-sm bg-[#393E4680]">UI</button>
        <button className="md:px-4 px-1 md:py-2 md:rounded-full rounded-md text-sm bg-[#393E4680]">UX</button>
        <button className="md:px-4 px-1 md:py-2 md:rounded-full rounded-md text-sm bg-[#393E4680]">
          WEB DESIGN
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10  mt-12">
        <div className="  bg-[#393E4680] flex justify-center items-center p-10 rounded-xl backdrop-blur-sm">
          <img
            src="/images/image3.png"
            alt="Image 1"
            className="w-[250px] h-[150px] "
          />
        </div>
        <div className="  bg-[#393E4680] flex justify-center items-center  p-10 rounded-xl backdrop-blur-sm">
          <img
            src="/images/image1.png"
            alt="Image 2"
            className="w-[250px] h-[150px]"
          />
        </div>
        <div className=" bg-[#393E4680] flex justify-center items-center  p-10 rounded-xl backdrop-blur-sm">
          <img
            src="/images/image2.png"
            alt="Image 3"
            className="w-[250px] h-[150px] "
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cards;
