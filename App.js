import { useState } from 'react';
import './App.css';
import JokeList from './components/JokeList';


function App() {

  // Jokes state
  const [jokes, setJokes] = useState([]);


  // Fetch Jokes
  async function fetchJokesHandler(){
    const responsed =  await fetch('https://official-joke-api.appspot.com/random_ten')
    const jokesData = await responsed.json();
    setJokes(jokesData);
  }


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
