import React from 'react'


const Introduction = () => {
  return (
    <div className='flex justify-center items-center gap-10 px-10 py-20' >
        
        <div className='w-1/2'>
        <h3 className=' text-6xl font-bold' >
        About <span className='text-[#00ADB5]' >me</span></h3>
           
            <p className='leading-tight text-md text-justify w-[500px] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
        </div>
        
        <div>
            <img  src=".\images\man.png.png" alt="" className='w-[500px] h-[400px]' />
        </div>
        </div>
        
    

        
)
}

export default Introduction
    
        