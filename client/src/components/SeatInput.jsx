import React from 'react'
import '../styles/SeatInput.css'

const SeatInput = ({key,text,noOfSeat,setNoOfSeat}) => {

  const handleChange=(e)=>{
    setNoOfSeat({...noOfSeat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]:Number(e.target.value)
      })
    )
  }

  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
      <input type="number" className='seats-input' placeholder='0' max="30" min="0" name={text} onChange={handleChange} value={noOfSeat[text]}/>
    </div>
  )
}

export default SeatInput
