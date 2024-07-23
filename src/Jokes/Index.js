import React, { useState } from "react";
import axios from 'axios'
import JokesPage from "./pages/JokesPage";
import LoadingPage from "./pages/LoadingPage";
import { JOKE_API } from '../files/secrets';
import { useInput } from './hooks/useInput'
import PrimaryButton from './components/PrimaryButton';
import './files/style.css'

const Index = () => {
  const [loading, setLoading] = useState("notSet")
  const [jokeNumber, setJokeNumber] = useInput("1")
  const [jokes, setJokes] = useState([])

  const options = {
    method: 'GET',
    url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
    headers: {
      'x-rapidapi-key': JOKE_API,
      'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getJokes = async (n) => {
    setLoading("true")
    const numJokes = parseInt(n);
    if (isNaN(numJokes) || numJokes <= 0) {
      alert('Please enter a valid number greater than 0');
      return;
    }

    try {
      const jokePromises = [];
      for (let i = 0; i < numJokes; i++) {
        jokePromises.push(axios.request(options));
      }

      const responses = await Promise.all(jokePromises);
      const newJokes = responses.map((response, index) => ({
        id: index + 1,
        value: response.data[0].joke
      }));

      setLoading("false")
      setJokes(newJokes);
    } catch (error) {
      setJokes([{id: 0, value: "Error while loading jokes!"}]);
      setLoading("false")
      console.log(error);
    }
  };

  const renderPage = () => {
    switch (loading) {
      case "notSet":
        return;
      case "true":
        return <LoadingPage />
      case "false":
        return <JokesPage jokeData={jokes} />
      default:
        return;
    }
  }

  return (
    <div className="center column full-hw" style={{background: "aliceblue", justifyContent: "start", overflow: "auto"}}>
     <div className="center column" id="jokeDiv">
      <h2 style={{margin: "10px 0 20px 0", fontFamily: "Alexandria", color: "darkgreen", textAlign: "center"}}>Random Joke Generator</h2>
      <label htmlFor="joke">Enter number of jokes you want<br/>(minimum 1 and maximum 10)</label>
        <div className="formEl row center">
          <input type="number" name="joke" id="joke" value={jokeNumber} onChange={setJokeNumber} placeholder='Enter a number greater than 0' min="1" max="10" />
          <PrimaryButton type="button" handleClick={() => getJokes(jokeNumber)}>Click to get jokes</PrimaryButton>
        </div>
        {renderPage()}
        <div className="copyright">&#169; Neeraj Verma 2024</div>
     </div>
    </div>
  )
}

export default Index
