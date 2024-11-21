import React, { useContext} from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../styles/TimeSchedule.css'
import BsContext from '../Context/BsContext'

const TimeSchedule = () => {
  const context=useContext(BsContext)

  const {time,setTime}=context

  const handleChangeItem=(val)=>{
    setTime(val)

    window.localStorage.setItem("slot", val)
  }

  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className="TS_main_container">
        {slots .map((el,index)=>{
            return (
                <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeItem}/>
            )
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule
