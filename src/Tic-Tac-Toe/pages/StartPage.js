import React from 'react'
import { useForm } from '../hooks/useForm'
import style from '../files/styles.module.css'

const StartPage = (props) => {
  const initialUserData = {
    user1_name: "Player 1",
    user1_color: "#3585f9",
    user1_sign: "X",
    user2_name: "Player 2",
    user2_color: "#006400",
    user2_sign: "O"
  }
  const [ form, setForm ] = useForm(initialUserData)

  function submitForm(e){
    e.preventDefault()
    let userObj = {
      user1: {
          name: form.user1_name === form.user2_name ? `${form.user1_name}(X)` : form.user1_name,
          score: 0,
          color: form.user1_color,
          bgColor: `${form.user1_color}3d`,
          sign: "X"
      },
      user2: {
        name: form.user1_name === form.user2_name ? `${form.user2_name}(O)` : form.user2_name,
        score: 0,
        color: form.user2_color,
        bgColor: `${form.user2_color}3d`,
        sign: "O"
      }
    }
    props.setgames(userObj)
    props.pageToggle()
  }

  function changeBgColor(target, color) {
    document.getElementById(target).style.background = color;
  }

  return (
    <div className='center column full-w'>
      <h2 style={{margin: "10px 0 20px 0", fontFamily: "Alexandria", color: "darkgreen", textAlign: "center", textTransform: "uppercase"}}>Select player settings</h2>
      <form onSubmit={(e) => {submitForm(e)}}>
        <div id="player1Data" className={style.playerData} style={{marginBottom: "15px"}}>
          <div className='formEl column'>
            <label className='formLabel' htmlFor="user1_name">Player 1(X): </label>
            <input type="text" id='user1_name' name='user1_name' value={form.user1_name} onChange={setForm} placeholder='Enter Player 1'/>
          </div>
          <div className='formEl column'>
            <span style={{fontWeight: "bold", margin: "4px 0"}}>Select Color for Player 1: </span>
            <div className='center full-w' style={{justifyContent: "space-between", marginTop: "7px"}}>
              <input type="radio" hidden id='#006400_1' name='user1_color' value="#006400" onChange={(e)=>{setForm(e); changeBgColor("player1Data", "#0064003d")}}/>
              <label htmlFor="#006400_1" className={style.optionLabel} style={{background: "#006400"}}></label>
              <input type="radio" hidden id='#3585f9_1' name='user1_color' value="#3585f9" onChange={(e)=>{setForm(e); changeBgColor("player1Data", "#3585f93d")}}/>
              <label htmlFor="#3585f9_1" className={style.optionLabel} style={{background: "#3585f9"}}></label>
              <input type="radio" hidden id='#8b0000_1' name='user1_color' value="#8b0000" onChange={(e)=>{setForm(e); changeBgColor("player1Data", "#8b00003d")}}/>
              <label htmlFor="#8b0000_1" className={style.optionLabel} style={{background: "#8b0000"}}></label>
            </div>
          </div>
        </div>
        <div id="player2Data" className={style.playerData}>
          <div className='formEl column'>
            <label className='formLabel' htmlFor="user2_name">Player 2(O): </label>
            <input type="text" id='user2_name' name='user2_name' value={form.user2_name} onChange={setForm} placeholder='Enter Player 2'/>
          </div>
          <div className='formEl column'>
            <span style={{fontWeight: "bold", margin: "4px 0"}}>Select Color for Player 2: </span>
            <div className='center full-w' style={{justifyContent: "space-between", marginTop: "7px"}}>
              <input type="radio" hidden id='#006400_2' name='user2_color' value="#006400" onChange={(e)=>{setForm(e); changeBgColor("player2Data", "#0064003d")}}/>
              <label htmlFor="#006400_2" className={style.optionLabel} style={{background: "#006400"}}></label>
              <input type="radio" hidden id='#3585f9_2' name='user2_color' value="#3585f9" onChange={(e)=>{setForm(e); changeBgColor("player2Data", "#3585f93d")}}/>
              <label htmlFor="#3585f9_2" className={style.optionLabel} style={{background: "#3585f9"}}></label>
              <input type="radio" hidden id='#8b0000_2' name='user2_color' value="#8b0000" onChange={(e)=>{setForm(e); changeBgColor("player2Data", "#8b00003d")}}/>
              <label htmlFor="#8b0000_2" className={style.optionLabel} style={{background: "#8b0000"}}></label>
            </div>
          </div>
        </div>
        <div className='center'><button className={style.primary_btn} type='submit'>Start Game</button></div>
      </form>
      <div class="copyright" style={{color: "#828282", fontFamily: "Alexandria"}}>© Neeraj Verma 2024</div>
    </div>
  )
}

export default StartPage
