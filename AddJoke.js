import { useRef } from "react";
import styles from "./AddJoke.module.css"

// Add New Joke
function AddJoke(props){

    const {onNewJoke} = props;

    const typeRef = useRef('');
    const setupRef = useRef('');
    const punchlineRef = useRef('');

    function submitHandler(event){
        event.preventDefault();

        const joke = {
            type: typeRef.current.value,
            setup: setupRef.current.value,
            punchline: punchlineRef.current.value
        }

        onNewJoke(joke);
    }

    return(
        <form onSubmit={submitHandler} className={styles["control"]}>
            <div>
                <label htmlFor="type">Type</label>
                <input type="text" id="type" ref={typeRef} />
            </div>
            <div>
                <label htmlFor="setup">Setup</label>
                <textarea type="text" id="setup" rows={5} ref={setupRef}></textarea>
            </div>
            <div>
                <label htmlFor="punchline">Punchline</label>
                <textarea type="text" id="punchline" rows={5} ref={punchlineRef}></textarea>
            </div>
            <button>Add Joke</button>
        </form>
    )
}
export default AddJoke;