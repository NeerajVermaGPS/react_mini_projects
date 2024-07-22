import React from 'react'
import userSVG from '../files/user.svg'
import PrimaryButton from '../components/PrimaryButton'

const RegSuccess = (props) => {
    const userData = JSON.parse(sessionStorage.getItem("user"))
    let subjects =[userData["english"], userData["maths"], userData["physics"]]
    console.log(subjects)

  return (
    <div className='full-hw center column' style={{background: "aliceblue"}}>
      <div className='successInfo'><h3 style={{fontSize: "13px", fontWeight: "normal", fontFamily: "Alexandria"}}>You are registered successfully!</h3></div>
      <div className='userCard center column'>
        <div className='center column' style={{marginBottom: "15px"}}>
            <img src={userSVG} style={{width: "110px"}} alt="user" />
            <div className='center column'>
                <div style={{margin: "8px 0"}}><h4 style={{fontSize: "20px", color: "#3585f9"}}>{userData["firstname"]} {" "} {userData["lastname"]}</h4></div>
                <div style={{color: "#7e7e7e", fontSize: "13px"}}>{userData["about"]}</div>
                <PrimaryButton style={{margin: "15px 0 10px 0", padding: "8px 20px", background: "#3585f9", fontSize: "11px"}} handleClick={() => {props.loginStatus()}}>Log Out</PrimaryButton>
            </div>
        </div>
        <div className='full-hw'>
            <div><b>Email: </b>{userData["email"]}</div>
            <div style={{textTransform: "capitalize"}}><b>Gender: </b>{userData["gender"]}</div>
            <div><b>Contact: </b>{userData["contact"]}</div>
            <div style={{textTransform: "capitalize"}}><b>Subject: </b>{subjects.map((subject, i) => subject === undefined ? " " :  (i + 1) + ") " + subject + " ")}</div>
            <div><b>Language Choice: </b>{userData["choice"]}</div>
            <div><b>Website: </b><a href={userData["url"]}>Visit Here</a></div>
        </div>
      </div>
    </div>
  )
}

export default RegSuccess
