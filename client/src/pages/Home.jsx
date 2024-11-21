import React, { useContext } from 'react'
import SelectMovie from '../components/SelectMovie'
import '../styles/Home.css'
import LastBookingDetail from '../components/LastBookingDetail'
import SelectSeats from '../components/SelectSeats'
import TimeSchedule from '../components/TimeSchedule'
import BsContext from '../Context/BsContext'

const Home = () => {
  const context=useContext(BsContext)
  const{
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setError,
    success,

  }=context

  const handleBooking=()=>{
    if(!movie){
      setError(true)
      setError("Please select a movie")
    }else{
      handlePostBooking()
    }
  }

  return (
    <div className='container'>
        <div className="wrapper">
            <div className="select_movie_component">
            <SelectMovie/>
            </div>
            <div className='last_booking_details_container'>
                <LastBookingDetail/>
            </div>
        </div>
        <div className="time_seats_container">
            <TimeSchedule/>
            <SelectSeats/>
            <button className='BN_btn' onClick={()=>{
              handleBooking()
            }}>BOOK NOW</button>
        </div>

        
    </div>
  )
}

export default Home
