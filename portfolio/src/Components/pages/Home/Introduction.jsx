import React from 'react'


const Introduction = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more"
  return (
    <div className='flex justify-center items-center gap-10 ' >
        
        <div className='w-1/2'>
        <h3 className=' text-6xl font-bold' >
        About <span className='text-[#00ADB5]' >me</span></h3>
           
            <p className='leading-tight text-md text-justify w-[500px] py-4'>{text}</p>
        </div>
        
        <div>
            <img  src=".\images\man.png.png" alt="" className='w-[500px] h-[400px]' />
        </div>
        </div>
        
    

        
)
}

export default Introduction
    
        