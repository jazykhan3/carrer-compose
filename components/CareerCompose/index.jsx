import Image from "next/image";
import React from "react";

function CareerCompose() {
  const sections = [
    {
      title: "Resume Select",
      content: "We understand the importance of a well-crafted resume in showcasing your professional profile. That's why we go the extra mile to simplify the process for you. Our platform not only takes care of the tedious task of re-formatting but also goes a step further by seamlessly integrating your information into the resume template. This hands-on approach ensures that you can focus on the content and key details of your experience, skills, and achievements, while we handle the technicalities of formatting and data input. With this commitment to efficiency, we aim to provide you with a polished and professional resume that truly reflects your qualifications and strengths, ultimately streamlining your path to career success.",
      buttonText: "Start Now",
    },
    {
      title: "Create a new resume",
      content: "We understand the importance of a well-crafted resume in showcasing your professional profile. That's why we go the extra mile to simplify the process for you. Our platform not only takes care of the tedious task of re-formatting but also goes a step further by seamlessly integrating your information into the resume template. This hands-on approach ensures that you can focus on the content and key details of your experience, skills, and achievements, while we handle the technicalities of formatting and data input. With this commitment to efficiency, we aim to provide you with a polished and professional resume that truly reflects your qualifications and strengths, ultimately streamlining your path to career success.",
      buttonText: "Add Custom Button",
    },
  ];

  return (
    <div>
      <div className="h-[5.625rem] shadow-md pl-[7rem] flex items-center">
        <Image src={"/careerLogo.png"} height={32} width={162} alt="" />
      </div>
      <div className="px-[7rem] py-[2rem]">
        {sections.map((section, index) => (
          <div key={index} className="w-full h-[24rem] my-[1.25rem] shadow-md py-[2.5rem] px-[3rem]">
            <div className="flex items-center justify-between">
              <p className="mt-3 font-bold text-[2rem] w-max text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
                {section.title}
              </p>
              <button className={`text-xl font-medium rounded-full px-[2rem] py-[0.75rem] ${index === 1 ? 'text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2' : 'text-white bg-gradient-to-r from-blue-500 to-blue-700'}`}>
                {section.buttonText}
              </button>
            </div>
            <div className="border-b border-[#DBDBDB] my-[1.5rem]"></div>
            <p className="font-normal text-xl text-[#46484D]">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerCompose;
