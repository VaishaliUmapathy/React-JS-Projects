import { useState } from "react";
import './datecounter.css'

function DateCounter(){
    
    const [count, setCount] = useState(0);
    const [slidervalue, setSlidervalue] = useState(1);
    const date= new Date('jan 1 2025');
    date.setDate(date.getDate() + count );

    function handleReset(){
        setCount(0);
        setSlidervalue(1);
    }

    return (
        <div className="date-counter-container">
            <h1  className="title">Date counter</h1>
            <div className="slider-container">
            <input 
            type="range" 
            min="0" 
            max="10" 
            value={slidervalue} 
            onChange={(e)=>setSlidervalue(Number(e.target.value))}/>
            <span>Step: {slidervalue}</span></div>
            <div className="counter-container">
                <button onClick={()=>setCount(count - slidervalue)}>-</button>
                <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
                <button onClick={()=>setCount(count + slidervalue)}>+</button>
            </div>
            <p className="result">
                <span>
                {count === 0
                    ? "Today is "
                    : count > 0
                    ? `${count} days from today is `
                    : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
            {count !== 0 ||slidervalue !== 1 ?(
                <button className="reset-button" onClick={handleReset}>Reset</button>
            ): null}
            
        </div>
    )}
export default DateCounter;