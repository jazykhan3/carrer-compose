"use client";
import { Tabs } from "antd";
import Image from "next/image";
import React from "react";

function Interests() {
  return (
    <div className="w-full mt-20 mb-[3.75rem] px-20">
      <div className="p-[2rem] shadow-md rounded-[1.25rem]">
        <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Interests{" "}
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
          className="tabs"
          defaultActiveKey="1"
          items={[
            {
              label: "Top Voice",
              key: "1",
              children: (
                <div className="flex items-start gap-5">
                  <Image
                    src={"/interest.png"}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Clement Mihailescu
                    </p>
                    <span className="flex items-center gap-5">
                      {" "}
                      <p className="text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]">
                        Co-Founder & CEO of AlgoExpert
                      </p>
                      <p className="text-xl font-normal text-[#838485] ">
                        Ex-Facebook Software Engineer
                      </p>{" "}
                    </span>
                    <p className="text-xl font-normal text-[#838485] ">
                      Ex-Facebook Software Engineer
                    </p>
                    <p className="text-xl font-normal text-[#46484D] ">
                      493,758 followers
                    </p>
                    <button className="flex items-center gap-2 w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">
                      {" "}
                      <Image src={"/tick.png"} height={24} width={24} alt="" />
                      Following
                    </button>
                  </span>
                </div>
              ),
            },
            {
              label: "Companies",
              key: "2",
              children: (
                <div className="flex items-start gap-5">
                  <Image
                    src={"/interest.png"}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Clement Mihailescu
                    </p>
                    <span className="flex items-center gap-5">
                      {" "}
                      <p className="text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]">
                        Co-Founder & CEO of AlgoExpert
                      </p>
                      <p className="text-xl font-normal text-[#838485] ">
                        Ex-Facebook Software Engineer
                      </p>{" "}
                    </span>
                    <p className="text-xl font-normal text-[#838485] ">
                      Ex-Facebook Software Engineer
                    </p>
                    <p className="text-xl font-normal text-[#46484D] ">
                      493,758 followers
                    </p>
                    <button className="flex items-center gap-2 w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">
                      {" "}
                      <Image src={"/tick.png"} height={24} width={24} alt="" />
                      Following
                    </button>
                  </span>
                </div>
              ),
            },
            {
              label: "Groups",
              key: "3",
              children: (
                <div className="flex items-start gap-5">
                  <Image
                    src={"/interest.png"}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Clement Mihailescu
                    </p>
                    <span className="flex items-center gap-5">
                      {" "}
                      <p className="text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]">
                        Co-Founder & CEO of AlgoExpert
                      </p>
                      <p className="text-xl font-normal text-[#838485] ">
                        Ex-Facebook Software Engineer
                      </p>{" "}
                    </span>
                    <p className="text-xl font-normal text-[#838485] ">
                      Ex-Facebook Software Engineer
                    </p>
                    <p className="text-xl font-normal text-[#46484D] ">
                      493,758 followers
                    </p>
                    <button className="flex items-center gap-2 w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">
                      {" "}
                      <Image src={"/tick.png"} height={24} width={24} alt="" />
                      Following
                    </button>
                  </span>
                </div>
              ),
            },
            {
              label: "Newsletters",
              key: "4",
              children: (
                <div className="flex items-start gap-5">
                  <Image
                    src={"/interest.png"}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Clement Mihailescu
                    </p>
                    <span className="flex items-center gap-5">
                      {" "}
                      <p className="text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]">
                        Co-Founder & CEO of AlgoExpert
                      </p>
                      <p className="text-xl font-normal text-[#838485] ">
                        Ex-Facebook Software Engineer
                      </p>{" "}
                    </span>
                    <p className="text-xl font-normal text-[#838485] ">
                      Ex-Facebook Software Engineer
                    </p>
                    <p className="text-xl font-normal text-[#46484D] ">
                      493,758 followers
                    </p>
                    <button className="flex items-center gap-2 w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">
                      {" "}
                      <Image src={"/tick.png"} height={24} width={24} alt="" />
                      Following
                    </button>
                  </span>
                </div>
              ),
            },
            {
              label: "Schools",
              key: "5",
              children: (
                <div className="flex items-start gap-5">
                  <Image
                    src={"/interest.png"}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="flex flex-col gap-5">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Clement Mihailescu
                    </p>
                    <span className="flex items-center gap-5">
                      {" "}
                      <p className="text-xl font-normal text-[#838485] pr-5 border-r border-[#838485]">
                        Co-Founder & CEO of AlgoExpert
                      </p>
                      <p className="text-xl font-normal text-[#838485] ">
                        Ex-Facebook Software Engineer
                      </p>{" "}
                    </span>
                    <p className="text-xl font-normal text-[#838485] ">
                      Ex-Facebook Software Engineer
                    </p>
                    <p className="text-xl font-normal text-[#46484D] ">
                      493,758 followers
                    </p>
                    <button className="flex items-center gap-2 w-fit text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2">
                      {" "}
                      <Image src={"/tick.png"} height={24} width={24} alt="" />
                      Following
                    </button>
                  </span>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Interests;
