import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const events = [
    {
        "name": "Dil-luminati Tour",
        "place": "Rajouri Garden",
        "image": "https://b.zmtcdn.com/data/zomaland/41d832c50e146682ed80f4ee445ff60e1728294749.png"
    },
    {
        "name": "It Was All A Dream",
        "place": "New Delhi",
        "image": "https://www.yorkshire.com/wp-content/uploads/2024/07/Karan-Aujla.jpg"
    }
]
function Events() {
    return (
        <>
        <Navbar/>
        {events.map((event)=>{
            return <Card url={event.image} name={event.name} place={event.place}/>
        })}
        </>
  )
}

export default Events