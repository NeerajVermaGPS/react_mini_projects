import RegistrationPage from './pages/RegistrationPage'
import RegSuccess from './pages/RegSuccess'
import './files/style.css'
import { useState } from 'react'

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const setLoginStatus = () => {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
  }

  console.log("Component Rerendered")
  return (
    isLoggedIn ? <RegSuccess loginStatus={setLoginStatus}/> : <RegistrationPage loginStatus={setLoginStatus}/>
  )
}

export default Index
