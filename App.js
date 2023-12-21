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
      //Add firebase 
      const responsed =  await fetch('https://reacthttprequestsjokes-default-rtdb.firebaseio.com/jokes.json')
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
  async function addNewJokeHandler(joke){
    // Firebase fetch 
    const response =  await fetch("https://reacthttprequestsjokes-default-rtdb.firebaseio.com/", {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data);
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
