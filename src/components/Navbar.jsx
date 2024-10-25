import React from 'react'

function Navbar() {
  return (
    <>
        <div className='bg-green-400 h-[180px] flex justify-between border-black'>
            <div className='text-white ml-12 font-extrabold text-5xl flex items-center '>Event<br/>Management<br/>App</div>
            <ul className='flex items-center justify-evenly text-xl'>
                <a href='/' className='pt-6 rounded-2xl h-1/2 hover:bg-green-500 px-10 p-4 duration-150'>Home</a>
                <a href='/events' className='pt-6 rounded-2xl h-1/2 hover:bg-green-500 px-10 p-4 duration-150'>Events</a>
                <a href='/services' className='pt-6 rounded-2xl h-1/2 hover:bg-green-500 px-10 p-4 duration-150'>Services</a>
                <a className='pt-4 rounded-2xl h-1/2 hover:bg-green-500 px-10 p-4 duration-150'>Login / <br/>SignUp</a>
            </ul>
        </div>
    </>
  )
}

export default Navbar