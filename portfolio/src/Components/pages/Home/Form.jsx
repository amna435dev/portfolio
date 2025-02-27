import React from "react";
import { TbSend } from "react-icons/tb";
const Form = () => {
  return (
    < div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-wrap justify-center items-center">
      <div className="w-full md:w-1/2 xl:w-1/3  text-lg">
      <h1 className=' md:text-5xl text-3xl font-bold' >
                    Got a Project in <span className='text-[#00ADB5]' >mind?</span>
                </h1>
        <img src="./images/stand.png" alt="Project Image" className=" md:mb-6 md:ml-6 p-4" />
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-6">
<form className="flex flex-col md:w-3/4 md:mx-auto">
<div className="flex flex-col mb-4">
<div className="w-1/2 p-2">
<label className="md:text-sm mb-2" htmlFor="name">Your Name:</label>
<input type="text" id="name" placeholder="Name" className="p-2 mb-2  rounded-md w-48 bg-[#393E4680] text-[#EEEEEE80] outline-none focus:border-[#00ADB5] border-2 border-white/0 transition-all duration-300" style={{ marginRight: '10px' }} />
</div>
<div className="w-1/2 p-2">
<label className="md:text-sm mb-2" htmlFor="email">Your Email:</label>
<input type="email" id="email" placeholder="Email" className="p-2 mb-2   rounded-md w-48 bg-[#393E4680] text-[#EEEEEE80]  outline-none focus:border-[#00ADB5] border-2 border-white/0 transition-all duration-300" />
</div>
</div>
<div className="mb-4">
<label className="md:text-sm mb-2" htmlFor="message">Your Message:</label>
<textarea id="message" placeholder="Message" className="p-2 mb-2  rounded-md h-40 w-full bg-[#393E4680] text-[#EEEEEE80]  outline-none focus:border-[#00ADB5] border-2 border-white/0 transition-all duration-300"></textarea>
</div>
<button type="submit" className="hover:bg-[#393E4680] bg-[#00ADB5] text-white font-bold  rounded-full text-xs flex items-center gap-1 px-[6px]" style={{width:'120px',height:'30px'}}>
<div> Send Message </div>
 <div>
 <TbSend />
 </div>
</button>
</form>
</div>

    </div>
  )
}

export default Form
