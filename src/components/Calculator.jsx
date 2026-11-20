import './calculator.css'
import { useState } from 'react';
function Calculator(){
    return(
        <div>
            <h1>CALCULATOR</h1>
            <CalculateBtn/>
        </div>
    )

}
function CalculateBtn(){
    const [input,setInput]=useState('');
    const [output,setOutput]=useState('');
    function handleOnClick(value){
       if(value==="Clear"){
        setInput(0);
        setOutput(0);
       }
       else if(value==="=")
       {
        try {
            setOutput(eval(input)); // Evaluates the final result
        } catch (error) {
            setOutput("Error");
        }
       }
       else if(['+','-','*','/'].includes(value)){
        try{
            if(input){

                const result = eval(input); // Eval
                setInput(result+value); // Eval
                setOutput(result); // Eval
            }
        }
            catch(error){
                setOutput("Error")
            }
       }
       else{
        setInput(input+value);
       }
    }
return(
    <div className="cal-div">
        <input type="text" value={output}></input>
    <div className='cal-btn'>
    <Button onClick={handleOnClick}>7</Button>
    <Button onClick={handleOnClick}>8</Button>
    <Button onClick={handleOnClick}>9</Button>
    <Button onClick={handleOnClick}>x</Button>
    <Button onClick={handleOnClick}>4</Button>
    <Button onClick={handleOnClick}>5</Button>
    <Button onClick={handleOnClick}>6</Button>
    <Button onClick={handleOnClick}>-</Button>
    <Button onClick={handleOnClick}>1</Button>
    <Button onClick={handleOnClick}>2</Button>
    <Button onClick={handleOnClick}>3</Button>
    <Button onClick={handleOnClick}>+</Button>
    <Button onClick={handleOnClick}>/</Button>
    <Button onClick={handleOnClick}>0</Button>
    <Button onClick={handleOnClick}>=</Button>
    <Button>Clear</Button>
    </div>    
    

    </div>
)
}
function Button({children,onClick}){
return (<button onclick={onClick}>{children}</button>)
}
export default Calculator;
