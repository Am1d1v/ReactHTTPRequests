import { useState } from 'react';
import './App.css';
import JokeList from './components/JokeList';


function App() {

  // Jokes state
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState()


  // Fetch Jokes
  async function fetchJokesHandler(){
    setIsLoading(true)
    const responsed =  await fetch('https://official-joke-api.appspot.com/random_ten')
    const jokesData = await responsed.json();
    setJokes(jokesData);
    setIsLoading(false)
  }


  return (
    <>
    <section>
      <button onClick={fetchJokesHandler}>Fetch Jokes</button>
    </section>
    <section className='jokes'>
      {isLoading ? <h1>Loading...</h1> : <JokeList jokes={jokes}/>}
    </section>
    </>
  );
}

export default App;
