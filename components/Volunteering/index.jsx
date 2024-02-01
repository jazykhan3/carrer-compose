"use client";
import Image from "next/image";
import React from "react";

export default function Volunteering() {
  return (
    <div className="w-full mt-20 mb-[3.75rem] px-20">
      <div className="p-[2rem] shadow-md rounded-[1.25rem]">
        <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Volunteering{" "}
          </p>
          <div className="flex items-center gap-5">
            <Image
              className="cursor-pointer"
              src={"/addIcon.png"}
              height={32}
              width={32}
              alt=""
              onClick={() => {}}
            />
            <Image
              className="cursor-pointer"
              src={"/editIcon.png"}
              height={32}
              width={32}
              alt=""
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-start mt-3 gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-3 ml-4 w-full">
              <p className="mt-3 font-bold text-2xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
                Software Engineer
              </p>
              <p className="text-[#46484D] font-normal text-xl">
                Spicy Green Book{" "}
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Feb 2021-May 2021-4 Months
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Economic Empowerment
              </p>
              <p className="text-[#46484D] font-normal text-xl">
                http://spicygreenbook.org/
              </p>
              <span className="w-full flex justify-between items-center">
                <p className="text-[#838485] font-normal text-xl">...</p>
                <p className="text-[#838485] font-normal text-xl">See more..</p>
              </span>
            </span>
          </span>
          <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
          <span className="flex items-start mt-1 gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-3 ml-4 w-full">
              <p className="mt-3 font-bold text-2xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
              Block Chain Developer
              </p>
              <p className="text-[#46484D] font-normal text-xl">
                Spicy Green Book{" "}
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Feb 2021-May 2021-4 Months
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Economic Empowerment
              </p>
              <p className="text-[#46484D] font-normal text-xl">
                http://spicygreenbook.org/
              </p>
              <span className="w-full flex justify-between items-center">
                <p className="text-[#838485] font-normal text-xl">...</p>
                <p className="text-[#838485] font-normal text-xl">See more..</p>
              </span>
            </span>
          </span>
          <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
        </div>
      </div>
    </div>
  );
}
