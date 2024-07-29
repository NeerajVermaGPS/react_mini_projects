import React from 'react'
import style from '../files/overlayStyles.module.css'

const Overlay = (props) => {
  return (
    <div className={`${style.main_box} full-hw center`}>
      <div className={`${style.innerBox} center column`}>
        <div className={`${style.message} center`}>
          {props.message}
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Overlay
