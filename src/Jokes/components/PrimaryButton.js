import React from 'react'

const PrimaryButton = (props) => {
    
  return (
    <button type={props.type} onClick={props.handleClick} className='primary_btn' style={props.style}>{props.children}</button>
  )
}

export default PrimaryButton
