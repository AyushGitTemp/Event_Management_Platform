import React from 'react'

function Card(props) {
    return (
    <>
        <div className='bg-slate-200 text-black inline-block p-6 text-center rounded-lg h-[440px] m-4 mt-6'>
            <img className='h-4/5 mb-2' src={props.url} alt="" />
            <h1 className='font-semibold '>{props.name}</h1>
            <h2>{props.place}</h2>
            <button className='bg-blue-600 text-white mt-1 p-1 hover:px-3 hover: duration-200 rounded-lg'>Book A Seat</button>
        </div>
    </>
    )
}

export default Card