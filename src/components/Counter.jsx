import React,{useState} from "react";
function Counter(){
  
   const [num,setNum]=useState(1);
   const add=()=>{
    setNum((currentValue)=>{
        return currentValue+1;
    })//setNum(2)
   }
    return(
        <>
        <h1>COUNTER APP</h1>
        <h2>Vlaue of X id:{num}</h2>
        <button onClick={add}>Click me</button>
        
        </>
    )
}
export default Counter;