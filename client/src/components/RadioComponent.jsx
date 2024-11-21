import React from 'react'
import '../styles/RadioComponent.css'

const RadioComponent = ({text,key,changeSelection,data}) => {
  
  const handleChecked=(val)=>{
    changeSelection(val)
  }


  return (
    <div name={text} className={`form-check-label ${data===text?"active":"inActive"}`} onClick={()=>{handleChecked(text)}}>
        <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent
