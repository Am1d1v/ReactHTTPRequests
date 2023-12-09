import { useState } from 'react';
import './App.css';
import JokeList from './components/JokeList';


function App() {


  const [jokes, setJokes] = useState([]);


  // Fetch Jokes
  function fetchJokesHandler(){
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(data => {
      setJokes(data)
    })
  }
  


  console.log(jokes);

  return (
    <>
    <section>
      <button onClick={fetchJokesHandler}>Fetch Jokes</button>
    </section>
    <section className='jokes'>
      <JokeList jokes={jokes}/>
    </section>
    </>
  );
}

export default App;
