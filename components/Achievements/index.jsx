"use client"
import Image from 'next/image'
import React from 'react'

function Achievments() {
  return (
    <div><div className='w-full mt-20 mb-[3.75rem] px-20'>
    <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
    <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
          Licenses & Certfication          </p>
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
        <div className='flex flex-col gap-5'>
        <span className="flex items-start mt-3 gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-3 ml-4">
              <p className="text-2xl font-bold text-[#000000s] cursor-pointer">
              Programming Foundations: Data Structures
              </p>
              <p className="text-[#838485] font-normal text-xl">
              Linkedin
              </p>
              <p className="text-[#46484D] font-normal text-xl">
              issued Aug 2021</p>
              <button className="flex items-center justify-start w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">Add Custom Button <Image src={'/leftArrowUp.png'} height={30} width={30} alt=''/> </button>

            </span>
          </span>
          <span className="flex items-start mt-3 gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-3 ml-4">
              <p className="text-2xl font-bold text-[#000000s] cursor-pointer">
              Java 11+Essential Training
              </p>
              <p className="text-[#838485] font-normal text-xl">
              Linkedin
              </p>
              <p className="text-[#46484D] font-normal text-xl">
              issued Aug 2021</p>
              <button className="flex items-center justify-start w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">Add Custom Button <Image src={'/leftArrowUp.png'} height={30} width={30} alt=''/> </button>

            </span>
          </span>
        </div>
    </div>


  </div></div>
  )
}

export default Achievments