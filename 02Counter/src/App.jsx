import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // WE CAN NAME THE SETCOUNTER ANYTHING LIKE solankiCounter //

  // let counter = 15


  const addfunction = () => {
    // console.log("Added", Math.random());
    
    // counter = counter + 1
    // setCounter(counter)
    setCounter(counter + 1)
    console.log("count", counter);
  }

  const removefunction = () => {
    setCounter(counter -1)
  }

    

  

  return (
    <>
     <h1>Solanki</h1>
     <h2>Conter Value: {counter}</h2>
     <button onClick={addfunction}>Add Value {counter}</button>
     <br />
     <button onClick={removefunction}>Remove Value {counter} </button>
    </>
  )
}

export default App
