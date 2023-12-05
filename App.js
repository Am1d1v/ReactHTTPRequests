import './App.css';
import JokeList from './components/JokeList';




function App() {

  const dummyJokes = [
    {
      type: "general",
      setup: "Setup",
      punchline: "Punchline"
    },
    {
      type: "general",
      setup: "Setup",
      punchline: "Punchline"
    }
  ];

  return (
    <>
    <section>
      <button>Fetch Jokes</button>
    </section>
    <section className='jokes'>
      <JokeList jokes={dummyJokes}/>
    </section>
    </>
  );
}

export default App;
