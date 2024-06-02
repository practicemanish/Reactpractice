import { useState, useEffect } from "react";

function App() {

  let [counter, setCounter] = useState(14)

  
  const addValue = () =>{
    // counter = counter + 1;
    // console.log("clicked", counter);
    setCounter(counter + 1);
    //assignment question
    if(counter == 20){
      setCounter(20)
    }
    
  }
  const removeValue = () =>{
    setCounter(counter-1)
    if(counter ==0){
      setCounter(0)
    }
  }
 

  return (
    <>
 <h1>Manish vite project practice</h1>
 <h2>Counter value:{counter} </h2>

 <button 
 onClick={addValue}>Add value</button>
 <br />
 <button
 onClick={removeValue}>remove value</button>

  
  </>
  );
}

export default App
