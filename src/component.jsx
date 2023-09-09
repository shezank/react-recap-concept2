import { useState } from "react"

export default function Adding(){

    const [count, setCount] = useState(0);

    const haldeleUp =()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const haldeleDown = () =>{
        const newCountDown = count - 1;
        setCount(newCountDown);
    }
    return (
        <div>
            <h2>Count: {count} </h2>
            <button onClick={haldeleUp}>UP</button>
            <button onClick={haldeleDown}>DOWN</button>
        </div>
    )
}