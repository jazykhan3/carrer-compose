"use client";
import Image from "next/image";
import React from "react";
import {Timeline } from "antd";

function Experience() {
  return (
    <div className="w-full mb-[3.75rem] px-20">
      <div className="p-[2rem] shadow-md rounded-[1.25rem]">
        <div className="flex items-center justify-between">
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Experience
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
        <p className="text-xl font-normal text-[#46484D] mt-1">
          A full-stack Software Engineer driven by a passion for knowledge. I
          focus on building software that improves user engagement and
          experience through developing fast solutions to complex problems that
          allow users to excel.
        </p>
        <div className="mt-[2rem]">
          <span className="flex items-center gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-1 ml-4">
              <p className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
                State Farm
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Full-time.2 yrs qo months
              </p>
            </span>
          </span>

          <Timeline
            className="mt-6"
            items={[
              {
                dot: <Image src={"/dot.png"} height={13} width={13} alt="" />,
                children: (
                  <div className="ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F] my-4">
                      Software Engineer 11
                    </p>
                    <p className="text-[#838485] font-normal text-xl mb-2">
                      Jun 2022-Present-1 yr 8 months
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      A full- stack Software Engineer driven by a passion for
                      knowledge.I focus on building software that improves user
                      engagement and experience through developing fast
                      solutions to complex problems that allow user to
                      execl...................................see more
                    </p>
                    <p className="text-2xl font-bold text-[#2D2D2F] my-4">
                      Skills
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      Spring Boot,Amazon Web Service (AWS),SQL.Java Script.Agile
                      Methadologies.Software Development.Java.Grafana
                      .Prometheus.io.Maven. Spring Framework.Splunk
                    </p>
                  </div>
                ),
              },
              {
                dot: <Image src={"/dot.png"} height={13} width={13} alt="" />,
                children: (
                  <div className="ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Software Engineer 11
                    </p>
                    <p className="text-[#838485] font-normal text-xl my-2">
                      Jun 2022-Present-1 yr 8 months
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      A full- stack Software Engineer driven by a passion for
                      knowledge.I focus on building software that improves user
                      engagement and experience through developing fast
                      solutions to complex problems that allow user to
                      execl...................................see more
                    </p>
                  </div>
                ),
              },
            ]}
          />
          <div className="border-b border-[#6B6B6B] mb-[2.5rem] mt-[1.5rem]"></div>
          <span className="flex items-center gap-1">
            <Image src={"/companyLogo.png"} width={61} height={45} alt="" />{" "}
            <span className="flex flex-col gap-1 ml-4">
              <p className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer">
                State Farm
              </p>
              <p className="text-[#838485] font-normal text-xl">
                Full-time.2 yrs qo months
              </p>
            </span>
          </span>
          <Timeline
            className="mt-6"
            items={[
              {
                dot: <Image src={"/dot.png"} height={13} width={13} alt="" />,
                children: (
                  <div className="ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F] my-4">
                      Software Engineer 11
                    </p>
                    <p className="text-[#838485] font-normal text-xl mb-2">
                      Jun 2022-Present-1 yr 8 months
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      A full- stack Software Engineer driven by a passion for
                      knowledge.I focus on building software that improves user
                      engagement and experience through developing fast
                      solutions to complex problems that allow user to
                      execl...................................see more
                    </p>
                    <p className="text-2xl font-bold text-[#2D2D2F] my-4">
                      Skills
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      Spring Boot,Amazon Web Service (AWS),SQL.Java Script.Agile
                      Methadologies.Software Development.Java.Grafana
                      .Prometheus.io.Maven. Spring Framework.Splunk
                    </p>
                  </div>
                ),
              },
              {
                dot: <Image src={"/dot.png"} height={13} width={13} alt="" />,
                children: (
                  <div className="ml-[4.813rem]">
                    <p className="text-2xl font-bold text-[#2D2D2F]">
                      Software Engineer 11
                    </p>
                    <p className="text-[#838485] font-normal text-xl my-2">
                      Jun 2022-Present-1 yr 8 months
                    </p>
                    <p className="text-[#46484D] font-normal text-xl">
                      A full- stack Software Engineer driven by a passion for
                      knowledge.I focus on building software that improves user
                      engagement and experience through developing fast
                      solutions to complex problems that allow user to
                      execl...................................see more
                    </p>
                  </div>
                ),
              },
            ]}
          />
                    <div className="border-b border-[#6B6B6B] mb-[1rem] mt-[.5rem]"></div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
