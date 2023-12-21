import React from "react";
import Joke from "./Joke";
import styles from "./JokeList.module.css";

const JokeList = (props) => {

  const {jokes} = props;

  return (
    <ul className={styles["joke-list"]}>
      {jokes.map((joke, index) => ( 
        <Joke
          key={index}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
        />
      ))}
    </ul>
  );
};

export default JokeList;
