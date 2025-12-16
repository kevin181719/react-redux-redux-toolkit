import React from 'react'
import { useState } from 'react'

const Destructure = () => {

    const [num, setnum] = useState({user:"viplav", age:"20"})

    const btnClicked = () => {
        const newNum = {...num};
        newNum.user = "jenil";
        setnum(newNum);
        newNum.age = "22";
    }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default Destructure