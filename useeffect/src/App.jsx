import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
//mounting phase
const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>click</button>
    </div>
  )
}

export default App
