"use client";
import Image from "next/image";
import React from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter()
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <div className="w-100 flex h-screen">
      <div className="w-2/4 h-auto px-[2.5rem] py-[9.75rem] bg-[#E8EFFE] flex justify-between items-center ">
        <Image src={"/loginPageImg.png"} width={682} height={628} alt="" />
      </div>
      <div className="w-2/4 px-[6.25rem] pt-[6.313rem]">
       <div > <p className="font-semibold text-[2.563rem] text-left text-[#2D2D2F] mb-[2.313rem]">
          Welcome to your Professional communty
        </p>
        <Form
          name="form"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          className="form" // Add your custom class for styling
        >
          <Form.Item
            label="Email or Phone"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Enter your username"
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
          <p className="font-medium text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            {" "}
            Forgot password?
          </p>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              className="w-[26.75rem] mt-[1.5rem] mb-[.5rem] flex items-center justify-center text-xl font-normal h-[3.5rem] rounded-full px-[2rem] py-[0.75rem] text-white bg-gradient-to-r from-blue-500 to-blue-700"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Image src={"/or.png"} height={32} width={429} alt="" className="my-3" />{" "}

        <p class="flex flex-wrap gap-2 font-normal text-base text-[#838485] text-center items-center justify-start whitespace-nowrap">
    By clicking Continue, you agree to Career&nbsp;Connect
    <span class="font-medium text-base text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
        User Agreement, Privacy Policy
    </span>
    and
    <span class="font-medium text-base text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
        Cookie Policy
    </span>
</p>


        <Button className="w-[26.75rem]  my-[1rem] flex items-center gap-5 justify-center text-[#2d2d2f] text-xl font-normal h-[3.5rem] rounded-full px-[2rem] py-[0.75rem] ">
          <Image src={"/googleIcon.png"} height={26} width={26} alt="" />{" "}
          Continue with Google
        </Button>
        <Button onClick={()=>{router.push('/sign-up')}} className="w-[26.75rem] my-[1rem] flex items-center gap-5 justify-center text-[#2d2d2f] text-xl font-medium h-[3.5rem] rounded-full px-[2rem] py-[0.75rem] ">
          New to Career Connect?{" "}
          <span className="font-medium text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            Join now
          </span>
        </Button></div>
      </div>
    </div>
  );
}

export default Login;
