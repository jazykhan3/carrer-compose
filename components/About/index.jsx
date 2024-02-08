"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

function About() {
const about = 'A full-stack Software Engineer driven by a passion for knowledge. I focus on building software that improves user engagement and experience through developing fast solutions to complex problems that allow users to excel.';

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='w-full mt-20 mb-[3.75rem] px-20'>
      <div className='p-[2rem] shadow-md rounded-[1.25rem]'>
        <div className='flex items-center justify-between'>
          <p className="mt-3 font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
            About Us
          </p>
          <Image
            className='cursor-pointer'
            src={'/editIcon.png'}
            height={32}
            width={32}
            alt=''
            onClick={showModal}
          />
        </div>
        <p className='text-xl font-normal text-[#46484D] mt-1'>
          A full-stack Software Engineer driven by a passion for knowledge. I focus on building software
          that improves user engagement and experience through developing fast solutions to complex problems that allow users to excel.
        </p>
      </div>

      <Modal
        title={ <p className="my-4 pb-3 border-b border-[#EDEDED] font-bold text-[2rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500">
        About Us
      </p>}
      width={'90%'}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button className='h-[3.5rem] text-xl font-medium rounded-full px-[2rem] py-[0.75rem] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 border-gradient-to-blue-700 border-2'  key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button className='text-xl font-normal rounded-full px-[3rem] py-[0.75rem] h-[3.5rem] text-white bg-gradient-to-r from-[#3366FA] to-[#4CC7F3]' key="submit" type="" onClick={handleCancel}>
            Save
          </Button>,
        ]}
      >
  <Input.TextArea
  className='px-[2rem] py-[1.5rem] text-[#46484D] font-normal text-xl rounded-[1.875rem] border border-gradient'
          rows={10} // Set the number of rows
          style={{ height: 438 }} // Set the width and height
          placeholder="Edit your about us content here..."
          value={about}
        />      </Modal>
    </div>
  );
}

export default About;
