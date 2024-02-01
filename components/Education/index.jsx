"use client"
import Image from 'next/image'
import React from 'react'

function Education() {
  return (
    <div className='w-full mt-20 mb-[3.75rem] px-20'>
    <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
    <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Education
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
        <div className="mt-[2rem]">
          <span className="flex items-center gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-1 ml-4">
              <p className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
              General Assembly
              </p>
              <p className="text-[#838485] font-normal text-xl">
               Softwere Engineer
              </p>
              <p className="text-[#838485] font-normal text-xl">
              2020-2020              </p>
            </span>
          </span>

          <div className="mt flex flex-col gap-5 mt-3 ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                    Activites and socities
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                    Completed a Software Engineering training program focused on full-stack development,coding both front and back and applications with modern frameworks,libaries and languagel...................................see more
                    </p>
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                    Skills
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                    Sql,Python,JavaScript,React.js,MongoDB,Git,Express.js                    </p>
                  </div>
          <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
          <span className="flex items-center gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-1 ml-4">
              <p className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
              General Assembly
              </p>
              <p className="text-[#838485] font-normal text-xl">
               Softwere Engineer
              </p>
              <p className="text-[#838485] font-normal text-xl">
              2020-2020              </p>
            </span>
          </span>
          <div className="mt flex flex-col gap-5 mt-3 ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                    Activites and socities
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                    Completed a Software Engineering training program focused on full-stack development,coding both front and back and applications with modern frameworks,libaries and languagel...................................see more
                    </p>
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                    Skills
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                    Sql,Python,JavaScript,React.js,MongoDB,Git,Express.js                    </p>
                  </div>
          
        </div>
    </div>

  </div>  )
}

export default Education