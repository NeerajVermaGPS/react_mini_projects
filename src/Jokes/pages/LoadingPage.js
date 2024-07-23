import React from 'react'
import loadingImg from '../files/loading.webp'

const LoadingPage = () => {
  return (
    <div className='loadingDiv center column'>
        <img src={loadingImg} alt="loading" className='loadingImg'/>
        <span id='loadingText' style={{textAlign: "center"}}>Loading</span>
    </div>
  )
}

export default React.memo(LoadingPage)
