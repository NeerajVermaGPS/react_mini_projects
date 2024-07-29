import React, { useEffect, useState } from 'react'
import style from '../files/styles.module.css'
import box_style from '../files/boxStyle.module.css'
import {useOverlay} from '../hooks/useOverlay'

const GamePage = (props) => {
    const games = props.games
    const [overlay, setOverlay] = useOverlay({
      overlay_mode: "",
      winner: "",
      other_args: [resetGame, props.pageToggle, games]
    })
    const setGames = props.setgames
    const initialBoxes = ["", "", "", "", "", "", "", "", ""]
    const [boxes, setBoxes] = useState(initialBoxes)
    const [ox, setOX] = useState(0)
    
    const winningArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    useEffect(() => {
      declareWinner()
      // eslint-disable-next-line
    }, [boxes])

    function changeOX() {
        setOX(prev => prev + 1)
        return ox % 2 ? "O" : "X"
    }

    function boxMarker(box, i){
      if(box === ""){
        let newBoxes= [...boxes];
        newBoxes[i] = changeOX()
        setBoxes(newBoxes)
        let thisBox = document.getElementsByClassName("inner-boxes")[i];
        thisBox.style.color = newBoxes[i] === "X" ? decodeUser("X").color : decodeUser("O").color
        thisBox.style.backgroundColor = newBoxes[i] === "X" ? decodeUser("X").bgColor : decodeUser("O").bgColor
      }
    }

    function disableButton(state) {
      Array.from(document.getElementsByClassName("inner-boxes")).map((box, a) => {
        state ? box.setAttribute("disabled", `${state}`) : box.removeAttribute("disabled")
        return 0;
      })
    }

    function decodeUser(sign){
      const name = games.user1.sign === sign ? games.user1.name : games.user2.name
      const score = games.user1.sign === sign ? games.user1.score : games.user2.score
      const color = games.user1.sign === sign ? games.user1.color : games.user2.color
      const bgColor = games.user1.sign === sign ? games.user1.bgColor : games.user2.bgColor
      return {name, score, bgColor, color}
    }

    function updateScore(sign){
      let newGame = {...games}
      newGame.user1.sign === sign ? newGame.user1.score++ : newGame.user2.score++;
      setGames(newGame)
    }

    function declareWinner() {
      let currentSign = ox % 2 ? "X" : "O";
      let winner = decodeUser(currentSign).name;

      for(let i = 0; i < winningArr.length; i++){
        if(boxes[winningArr[i][0]] === boxes[winningArr[i][1]] && boxes[winningArr[i][1]] === boxes[winningArr[i][2]] && boxes[winningArr[i][0]] !== ""){
          console.log(winner + " is winner!")
          updateScore(currentSign);
          let scores = `${decodeUser("X").name}: ${decodeUser("X").score}\n${decodeUser("O").name}: ${decodeUser("O").score}` 
          console.log(scores)
          setOverlay({
            overlay_mode: "wonGame",
            winner: winner,
            other_args: [resetGame, props.pageToggle, games]
          })
          resetGame(true)
          break;
        } else if(ox === 9 && i === winningArr.length - 1) {
          console.log("Game Over")
          setOverlay({
            overlay_mode: "gameOver",
            winner: "",
            other_args: [resetGame, props.pageToggle, games]
        })
          resetGame(true)
          break;
        }
      }
    }

    function resetGame(state) {
      disableButton(state);
      setOX(0);
      if(!state){
        setBoxes(initialBoxes);
        Array.from(document.getElementsByClassName("inner-boxes")).map((box, a) => {
          box.style.backgroundColor = "white"
          return 0;
        })
        setOverlay({
          overlay_mode: "",
          winner: "",
          other_args: [resetGame, props.pageToggle, games]
        })
      }
    }

  return (
    <div className='center column full-w'>
      <h2 style={{margin: "10px 0 20px 0", fontFamily: "Alexandria", color: "darkgreen", textAlign: "center"}}>Tic Tac Toe</h2>
      <div className={`center ${style.main_box}`}>
        {
            boxes.map((box, i) => 
            <button key={i} className={`${style.innerBoxes} ${box_style.innerBoxes} inner-boxes`} onClick={()=>{boxMarker(box, i)}}>{box}</button>)
        }
      </div>
      <div className='center' style={{width:"300px", justifyContent:"space-between"}}>
        <button className={style.primary_btn} onClick={()=>{setOverlay({
            overlay_mode: "resetGame",
            winner: "",
            other_args: [resetGame, props.pageToggle, games]
        })}}>Reset Game</button>
        <button className={style.primary_btn} onClick={()=>{setOverlay({
            overlay_mode: "exitGame",
            winner: "",
            other_args: [resetGame, props.pageToggle, games]
        })}}>Exit Game</button>
      </div>
      {overlay}
      <div class="copyright" style={{color: "#828282", fontFamily: "Alexandria"}}>© Neeraj Verma 2024</div>
    </div>
  )
}

export default GamePage
