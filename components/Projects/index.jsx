"use client";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="w-full mt-20 mb-[3.75rem] px-20">
      <div className="p-[2rem] shadow-md rounded-[1.25rem]">
        <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Projects
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
        <div className="flex gap-5 my-3 flex-col">
          <p className="text-2xl font-bold text-[#2D2D2F]">Career Compose</p>
          <p className="text-xl font-normal text-[#838485]">Oct 2023-Present</p>
          <p className="text-xl font-normal text-[#46484D]">
            Embarking on the journey of crafting a compelling resume is a
            significant endavor,and we’re committed to being your trusted guide
            at every turn.Our specialized platform meticulously designed to
            support you in crea........see more
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <p className="text-2xl font-bold text-[#2D2D2F]">Skills</p>
          <p className="text-xl font-normal text-[#46484D]">
            React Js,Fire base,No Sql
          </p>
          <div className="flex gap-5 items-center">
            <Image
              src={"/projectImg.png"}
              width={267}
              height={116}
              alt=""
              className="rounded-[1.25rem]"
            />
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold text-[#2D2D2F]">
                Career Compose
              </p>
              <p className="text-xl font-normal text-[#46484D]">
                Embarking on the journey of crafting a compelling resume is a
                significant endavor,and we’re committed to being your trusted
                guide at every turn.Our specialized platform meticulously
                designed to support you in crea........see more
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
        <div className="flex gap-5 my-3 flex-col">
          <p className="text-2xl font-bold text-[#2D2D2F]">Career Compose</p>
          <p className="text-xl font-normal text-[#838485]">Oct 2023-Present</p>
          <p className="text-xl font-normal text-[#46484D]">
            Embarking on the journey of crafting a compelling resume is a
            significant endavor,and we’re committed to being your trusted guide
            at every turn.Our specialized platform meticulously designed to
            support you in crea........see more
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <p className="text-2xl font-bold text-[#2D2D2F]">Skills</p>
          <p className="text-xl font-normal text-[#46484D]">
            React Js,Fire base,No Sql
          </p>
          <div className="flex gap-5 items-center">
            <Image
              src={"/projectImg.png"}
              width={267}
              height={116}
              alt=""
              className="rounded-[1.25rem]"
            />
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold text-[#2D2D2F]">
                Career Compose
              </p>
              <p className="text-xl font-normal text-[#46484D]">
                Embarking on the journey of crafting a compelling resume is a
                significant endavor,and we’re committed to being your trusted
                guide at every turn.Our specialized platform meticulously
                designed to support you in crea........see more
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
<div className="w-100 flex items-center justify-center  text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700">Show all 3 Projects <Image src={'/leftArrowUp.png'} height={30} width={30} alt=''/> </div>
      </div>
    </div>
  );
}

export default Projects;
