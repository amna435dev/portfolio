import React from 'react'

const Header = () => {
  return (
  <div>
      <div className='flex justify-between px-20 py-6'>
        <h1 className='font-bold text-3xl'>ASK</h1>
        <ul className='flex gap-10 uppercase '>
            <li>home</li>
            <li>About me</li>
            <li>contact</li>
        </ul>
    </div>
    <div>
    <hr className='border-[1px] border-white/10' />
    </div>
  </div>
  )
}

export default Header