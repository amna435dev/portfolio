import React from 'react'
import { IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <div className='flex flex-col flex-wrap p-5'  >
        <div>
            <div className='md:mt-[100px] md:ml-[160px]'>
                <h1 className='uppercase md:text-7xl text-4xl  font-bold flex flex-col' >
                    Creative UI <span className='text-[#00ADB5]' >Designer</span>
                </h1>
               
              <div className='flex items-center justify-start py-5' >
              <button className='md:px-4 px-2 md:py-1  mx-2.5 rounded-full bg-[#00ADB5] text-white'>Hire Me</button>
              <a href='/BG.png' download className='md:px-4 px-2 md:py-1 mx-2.5 rounded-full  bg-[#393E46BF] text-white flex items-center gap-1'>
                <div>Download CV </div>
                <div>
                    <IoMdDownload/>
                </div>
                 </a> 
              </div>
            </div>
            </div>
            <div>
                <img  src=".\images\image.png.png" alt="" className='md:w-[500px] md:h-[500px] md:ml-[800px] md:mt-[-250px]' />
            </div>
            </div>
            
        
    
            
  )
}

export default Hero