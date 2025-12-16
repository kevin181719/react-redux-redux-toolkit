import React from 'react'
import { useState } from 'react'

const ArrayDestructure = () => {
    const [num, setNum] = useState([10, 20, 30]);

    const [snum, setnum] = useState(10);

    const bttnClicked = () => {

        setnum(prev =>prev + 1);
        setnum(prev =>prev + 1);
        setnum(prev =>prev + 1);

    }

    const btnClicked = () => {
        const newNum = [...num];
        newNum[0] = 100;
        setNum(newNum);
        newNum[1] = 200;
    }
    return (
        <div>
            <h1>{snum}</h1>
            <button onClick={bttnClicked}>click</button>
            <h1>{num}</h1>
            <button onClick={btnClicked}>click</button>
        </div>
    )
}

export default ArrayDestructure
