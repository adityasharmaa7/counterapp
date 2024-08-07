import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={()=>setCounter((prev)=>prev+1)}>Incriment</button>
      <button onClick={()=>setCounter((prev)=>prev-1)}>Decriment</button>
    </div>
  )
}

export default Counter
