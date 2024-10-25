import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <div className='bg-black text-7xl h-screen text-center font-semibold tracking-normal'>
            <span className='pt-36 text-indigo-400'><br/>Welcome to our Event Management Platform!!!<br/><br/><br/> By Team GitBusters<br/><br/>Scroll Down<br/>For More Options</span>
        </div>
        <div>
        <ul className='grid text-center text-white bg-black text-xl'>
                <a href='/' className='py-5 mx-36 rounded-2xl hover:bg-green-500 duration-150'>Home</a>
                <a href='/events' className='py-5 mx-36 rounded-2xl hover:bg-green-500 duration-150'>Events</a>
                <a href='/services' className='py-5 mx-36 rounded-2xl hover:bg-green-500 duration-150'>Services</a>
                <a className='py-5 mx-36 rounded-2xl hover:bg-green-500 duration-150'>Login / SignUp</a>
            </ul>
        </div>
    </>
  )
}

export default Home