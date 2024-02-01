import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full">
      <Image src={"/heroImg.png"} height={464} width={3000} alt="" />
      <div className="w-full px-20 mt-[-153px]">
        <div className="w-full flex items-center justify-between">
          <Image src={"/profileImg.png"} width={306} height={306} alt="" />{" "}
          <span className="flex items-center gap-4 mt-[3.75rem] ">
            <Image width={32} height={32} alt="" src={"/linkedinLogo.png"} />
            <Image width={32} height={32} alt="" src={"/editIcon.png"} />
          </span>
        </div>
        <div className="w-full flex justify-between mb-6">
          <div className="flex flex-col">
            {" "}
            <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
              Dominique Hosea
            </p>
            <p className="font-medium text-2xl text-[#2D2D2F] mt-3 mb-2">
              Software Engineer at state farm
            </p>
            <p className="text-xl font-normal text-[#838485]">
              Houston,Texas,United States.
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
                Contact Info
              </span>
            </p>
            <p className="text-xl font-normal text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
              500+Connection
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-1">
              <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
              <p className="text-xl font-normal text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
                State Farm
              </p>
            </span>
            <span className="flex items-center gap-1">
              <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
              <p className="text-xl font-normal text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
                State Farm
              </p>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
<button className="text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-white bg-gradient-to-r from-blue-500 to-blue-700">Open to</button>
<button className="text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">Add Profile Section </button>
<button className="text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">Add Custom Button </button>
<button className="text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-from-blue-500 border-gradient-to-blue-700 border-2">More </button>

          </div>
      </div>
    </div>
  );
}

export default Hero;
