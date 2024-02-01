"use client"
import Image from 'next/image'
import React from 'react'

function Languages() {
  return (
    <div className='w-full mt-20 mb-[3.75rem] px-20'>
    <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
    <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
          Language{" "}
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
      <p className='text-xl font-medium text-[#46484D] my-3'>
      French
      </p>
      <p className="my-3 font-normal text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
      Elementary Proficiency        </p>
    </div>

 
  </div>
  )
}

export default Languages