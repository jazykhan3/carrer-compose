"use client"
import Image from 'next/image'
import React from 'react'

function Skills() {
  return (
    <div className='w-full mt-20 mb-[3.75rem] px-20'>
    <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
      <div className='flex items-center justify-between'>
        <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
        Skills        </p>
        <Image
          className='cursor-pointer'
          src={'/editIcon.png'}
          height={32}
          width={32}
          alt=''
        />
      </div>
      <p className='text-xl font-normal text-[#46484D] my-3'>
      You’ve added the maximum number of skills
      </p>
      <p className="my-3 font-bold text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
      Spring Boot        </p>
      <span className='flex items-center my-3'>
      <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
      <p className='text-xl font-medium text-[#46484D]'>Software Engineer 11 at State Farm</p>

      </span>
      <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
      <p className='text-xl font-normal text-[#46484D] my-3'>
      You’ve added the maximum number of skills
      </p>
      <p className="my-3 font-bold text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
      Spring Boot        </p>
      <span className='flex items-center my-3'>
      <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
      <p className='text-xl font-medium text-[#46484D]'>Software Engineer 11 at State Farm</p>

      </span>

    </div>

 
  </div>
  )
}

export default Skills