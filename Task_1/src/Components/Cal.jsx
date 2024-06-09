import React, { useState } from 'react'

export default function Cal() {
    
    // States or Hooks
    const [but,setBut] =useState(0);
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const [c,setC]=useState(parseInt(a)+parseInt(b));

    //setting the hook A
    const updatea=(e)=>{
        setA(parseInt(e.target.value,10));
    };

    //setting the hook B
    const updateb=(e)=>{
        setB(parseInt(e.target.value,10));
    };

  return (
    <div>
        {but} <br/>

        <b><u>Counter</u></b><br/>

        <button onClick={()=>setBut(but+1)}>Increment</button> &nbsp;&nbsp;
        <button onClick={()=>setBut(but-1)}>Decrement</button> <br/><br/>

        <b><u>Addition </u></b><br/>

        <form onSubmit={()=>setC(a+b)}>

            <input type="number" name='a' onChange={updatea}></input> <br/>
            <input type="number" name='b' onChange={updateb}></input> <br/>
            <input type="submit" name="sub"></input> <br/>
            
            a: {a}  <br/> 
            b: {b} <br/> 
            sum is {c} <br/>
        
        </form>
    </div>
  )
}
