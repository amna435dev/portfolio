import React from 'react'


const Introduction = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more"
  return (
    <div className='flex md:flex-row flex-col md:justify-center judtify-start md:items-center  gap-10 ' >
        
        <div className='md:w-1/2'>
        <h3 className=' md:text-6xl text-3xl md:text-left text-center font-bold' >
        About <span className='text-[#00ADB5]' >me</span></h3>
           
            <p className='leading-tight md:text-md text-sm text-justify  md:w-[500px] md:py-4 md:px-4 px-2 py-2 '>{text}</p>
        </div>
        
        <div>
            <img  src=".\images\man.png.png" alt="" className='md:w-[500px] md:h-[400px] p-4' />
        </div>
        </div>
        
    

        
)
}

export default Introduction
    
        