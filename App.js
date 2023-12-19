import { useState, useEffect, useCallback} from 'react';
import './App.css';
import JokeList from './components/JokeList';
import AddJoke from './components/AddJoke';


function App() {

  // Jokes state
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState(null);


  // Fetch Jokes
  const  fetchJokesHandler =  useCallback(async() => {
    setIsLoading(true)
    setError(null);
    // Catch error
    try {
      const responsed =  await fetch('https://official-joke-api.appspot.com/random_ten')
      // If responsed data is false throw error
      if(!responsed.ok){
        throw new Error('Something went wrong');
      }
      const jokesData = await responsed.json();
      setJokes(jokesData);
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }, [])

  // UseEffect for fetch joke
   useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler])  

  //Add New Joke Handler
  function addNewJokeHandler(joke){
    console.log(joke);
  }

  return (
    <>
    <section>
      <AddJoke onNewJoke={addNewJokeHandler} />
    </section>
    <section>
      <button onClick={fetchJokesHandler}>Fetch Jokes</button>
    </section>
    <section className='jokes'>
      {isLoading && jokes.length === 0 && !error ? <h1>Loading...</h1> : <JokeList jokes={jokes}/>}
      {!isLoading && error && <p>{error}</p>}
    </section>
    </>
  );
}

export default App;
