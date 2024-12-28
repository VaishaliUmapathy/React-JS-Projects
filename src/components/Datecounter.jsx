import { useState } from "react";
import '../css/date.css'
function DateCounter(){
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date=new Date("jan 1 2025");
    date.setDate(date.getDate() + count);
    
return (
    <>
    <h1>Date counter</h1>
    <div className="container">
        <div className="step" >
            <button onClick={()=>setStep((c)=>c - 1)}>-</button>
            <p>step : {step}</p>
            <button className="increment" onClick={()=>setStep((c)=>c + 1)}>+</button>
        </div>
        <div className="step" >
            <button onClick={()=>setCount((c)=>c - step)}>-</button>
            <p>count : {count} </p>
            <button className="increment" onClick={()=>setCount((c)=>c + step)}>+</button>

        </div>
        <p><span>{count === 0 ? "Today is  " : count > 0 ? `${count} days from today is `:`${Math.abs(count)} days ago was `}</span>{date.toDateString()}</p>


    </div>
    </>
)
}
export default DateCounter;