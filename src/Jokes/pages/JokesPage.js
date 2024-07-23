import React from 'react'

const JokesPage = (props) => {
  return (
    <div>
        <div className='center'>
          {
            props.jokeData[0].value !== "Error while loading jokes!" ? <div className='info success'>Jokes loaded succesfully!</div> : <div className='info failure'>Error while loading jokes!</div>
          }
        </div>
        <div className='center jokeContainer'>
          {
            props.jokeData.map((joke) => <div key={joke.id} className='jokeCard'>{joke.value}</div>)
          }
        </div>
    </div>
  )
}

export default JokesPage
