import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    
  
    <footer className="bg-[#222831] py-6 text-center">
        <div>
    <hr className='border-[1px] border-white/10 mb-10' />
    </div>
    <div className="flex justify-center mb-2">
      <a href="#" className="mr-4 hover:text-gray-600 flex items-center gap-1">
        <i className="fas fa-home mr-2"><AiOutlineHome /></i> Home
      </a>
      <a href="#" className="mr-4 hover:text-gray-600 flex items-center gap-1">
        <i className="fas fa-user mr-2"><LuUser /></i> About Me
      </a>
      <a href="#" className="hover:text-gray-600 flex items-center gap-1">
        <i className="fas fa-envelope mr-2"><LuPhone /></i> Contact
      </a>
      </div>
      <div className="flex justify-center gap-2 mb-2">
        <div className="bg-[#393E46] rounded-full p-3 mr-2 ">
        <FaFacebook />
        </div>
        <div className=" bg-[#393E46] rounded-full p-3 mr-2 ">
        <FaInstagram />
        </div>
        <div className=" bg-[#393E46] rounded-full p-3 mr-2 ">
        <FiTwitter />
        </div>
        <div className="bg-[#393E46]  rounded-full p-3  ">
        <FiYoutube />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[#EEEEEE] ml-4">&copy; 2024 Your Website</p>
        <p className="text-[#EEEEEE] mr-4">Terms of Service - Privacy Policy</p>
      </div>
  </footer>
  )
}

export default Footer