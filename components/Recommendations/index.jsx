"use client"
import React from 'react'
import { Tabs } from 'antd';
import Image from 'next/image';


function Recommendations() {

  return (
    <div className='w-full mt-20 mb-[3.75rem] px-20'>
    <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
    <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
          Recommendations{" "}
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
        <Tabs
        className='tabs'
    defaultActiveKey="1"
    items={[
      {
        label: 'Given',
        key: '1',
        children:<div className='flex flex-col gap-5'>
            <p className='text-2xl font-bold text-[#2D2D2F]'>Full Stack Developer.  <span className='text-[#A9AAAA] font-normal'>1st</span></p>
          <span className='flex items-center gap-5'>  <p className='text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]'>September 22, Software Engineer</p>
            <p className='text-xl font-normal text-[#838485] b'>Founder of Archive.PDF</p> </span>
            <p className='text-xl font-normal text-[#46484D]'>Embarking on the journey of crafting a compelling resume is a significant endavor,and we’re committed to being your trusted guide at every turn.Our specialized platform meticulously designed to support you in crea.</p>
            <p className='text-xl font-normal text-[#46484D]'>Embarking on the journey of crafting a compelling resume is a significant endavor,and we’re committed to being your trusted guide at every turn.Our specialized platform meticulously designed to support you in crea.</p>

            <p className='text-xl font-normal text-[#46484D]'>Embarking on the journey of crafting a compelling resume is a significant endavor,and we’re committed to being your trusted guide at every turn.Our specialized platform meticulously designed to support you in crea.</p>

        </div>,
      },
     
    ]}
  />
    </div>

 
  </div>
  )
}

export default Recommendations