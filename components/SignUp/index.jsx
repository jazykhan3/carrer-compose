"use client";
import Image from "next/image";
import React from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
function SignUp() {
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <div className="w-100 flex h-screen">
      <div className="w-2/4 h-auto px-[2.5rem] py-[9.75rem] bg-[#E8EFFE] flex justify-between items-center ">
        <Image src={"/signUp.png"} width={682} height={628} alt="" />
      </div>
      <div className="w-2/4 px-[6.25rem] pt-[7.313rem] flex flex-col justify-between pb-5">
       <div > <p className="font-semibold text-[2.563rem] text-left text-[#2D2D2F] mb-[2.313rem]">
       Make the most your
professional life.        </p>
        <Form
          name="form"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          className="form" // Add your custom class for styling
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="yourname@gmail.com"
              className="h-[3.5rem] w-[26.75rem] rounded-full"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="text-[#00000040] font-normal text-xl"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
            type="password"
              className="h-[3.5rem] w-[26.75rem] rounded-full"
              placeholder="********"
            />
          </Form.Item>
     
          <Form.Item wrapperCol={{ span: 24 }}>
          <p className="flex flex-wrap gap-2 font-normal text-base text-[#838485]">
          By clicking Continue, your agree to Career Connect{" "}
          <span className="font-medium text-base text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            User Agreement,Privacy Policy
          </span>{" "}
          and{" "}
          <span className="font-medium text-base text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Cookie Policy
          </span>
        </p>
            <Button
              className="w-[26.75rem] mt-[1.5rem] mb-[.5rem] flex items-center justify-center text-xl font-normal h-[3.5rem] rounded-full px-[2rem] py-[0.75rem] text-white bg-gradient-to-r from-blue-500 to-blue-700"
              htmlType="submit"
            >
               Agree & Join
            </Button>
          </Form.Item>
        </Form>
        <Image src={"/or.png"} height={32} width={429} alt="" className="my-3" />{" "}

     
        <Button className="w-[26.75rem] mt-3 my-[0.5rem] flex items-center gap-5 justify-center text-[#2d2d2f] text-xl font-normal h-[3.5rem] rounded-full px-[2rem] py-[0.75rem] ">
          <Image src={"/googleIcon.png"} height={26} width={26} alt="" />{" "}
          Continue with Google
        </Button>
        </div>
        <div><p className="text-center font-medium text-lg text-[#2D2D2F]">Already on Career Connect? <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 cursor-pointer" onClick={()=>router.push('/login')}>Sign In</span></p></div>
      </div>
    </div>
  );
}

export default SignUp;
