import React from 'react'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className='flex flex-wrap'  >
        <div>
            <div className='mt-[100px] ml-[160px]'>
                <h1 className='uppercase text-7xl font-bold flex flex-col' >
                    Creative UI <span className='text-[#00ADB5]' >Designer</span>
                </h1>
               
              <div className='flex items-center justify-start py-5' >
              <button className='px-4 py-1  mx-2.5 rounded-full bg-[#00ADB5] text-white'>Hire Me</button>
              <button className='px-4 py-1 mx-2.5 rounded-full  bg-[#393E46BF] text-white flex items-center gap-1'>
                <div>Download CV </div>
                <div>
                    <IoMdDownload/>
                </div>
                 </button> 
              </div>
            </div>
            </div>
            <div>
                <img  src=".\images\image.png.png" alt="" className='w-[500px] h-[500px] ml-[800px] mt-[-250px]' />
            </div>
            </div>
            
        
    
            
  )
}

export default Hero