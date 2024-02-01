import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='w-full my-20 p-20'>
     <div className='p-[2rem] shadow-md rounded-[1.25rem]'>   <div className='flex items-center justify-between'>
        <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
              About Us
            </p>
            <Image className='cursor-pointer' src={'/editIcon.png'} height={32} width={32} alt=''/>
        </div>
        <p className='text-xl font-normal text-[#46484D] mt-1'>A full- stack Software Engineer driven by a passion for knowledge.I focus on building software
that improves user engagement and experience through developing fast solutions to complex problems that allow user to execl</p></div>
    </div>
  )
}

export default About