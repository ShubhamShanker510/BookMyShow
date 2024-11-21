import React, { useContext } from 'react'
import { seats } from '../data'
// import RadioComponent from './RadioComponent'
import SeatInput from './SeatInput'
import '../styles/SelectSeats.css'
import BsContext from '../Context/BsContext'


const SelectSeats = () => {
  const context=useContext(BsContext)
  const {noOfSeat,setNoOfSeat}=context

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats</h1>
      <div className="SS_main_container">
        {seats.map((ele,index)=>{
            return(
                <SeatInput key={index} text={ele} noOfSeat={noOfSeat} setNoOfSeat={setNoOfSeat}/>
            )
        })}
      </div>
    </div>
  )
}

export default SelectSeats
