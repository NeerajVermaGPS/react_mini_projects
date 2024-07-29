import React, { useState } from 'react'
import GamePage from './pages/GamePage'
import StartPage from './pages/StartPage'

const Index = () => {
  const [games, setGames] = useState({
    user1: {
        name: "Player 1",
        score: 0,
        color: "#3585f9",
        bgColor: "#3585f93d",
        sign: "X"
    },
    user2: {
        name: "Player 2",
        score: 0,
        color: "darkgreen",
        bgColor: "#0064003d",
        sign: "O"
    }
  })
  const [start, setStart] = useState(true)

  function toggleStart() {
    start ? setStart(false) : setStart(true)
  }

  return (
    <div className="center column full-hw" style={{background: "aliceblue", overflow: "auto"}}>
      {
        start ? <StartPage game={games} setgames={setGames} pageToggle={toggleStart} /> : <GamePage games={games} setgames={setGames} pageToggle={toggleStart} />
      }
    </div>
  )
}

export default Index
