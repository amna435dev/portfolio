import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <div>
      <div className='flex justify-between px-20 py-6'>
        <h1 className='font-bold text-3xl'>ASK</h1>
        <ul className='flex gap-10 uppercase '>
            <Link to={'/'} >home</Link>
            <Link to={'/about'} >About ME</Link>
            <Link to={'/contact'} >Contact ME</Link>
        </ul>
    </div>
    <div>
    <hr className='border-[1px] border-white/10' />
    </div>
  </div>
  )
}

export default Header