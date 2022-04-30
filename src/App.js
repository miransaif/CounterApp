import React,{useState} from "react";
import "./File.css"

const App = () => {
  const [counter , setCounter] = useState(0)
  return (
    <div>
      <h1>
        Counter App Using react
      </h1>
      <h2>value of our Counter is {counter}</h2>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default App