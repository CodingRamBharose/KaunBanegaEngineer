import React, { useEffect, useState } from 'react'

function Timer({settimeOut,questionNumber}) {
    const [timer,settimer]=useState(30);
    
    useEffect(()=>{
        if(timer===0) return settimeOut(true);
        const interval = setInterval(() => {
            settimer((prev)=>prev-1);
        }, 1000);
        return ()=> clearInterval(interval);
    },[settimeOut,timer]);

    useEffect(()=>{
        settimer(30)
    },[questionNumber]);

  return (
    timer
  )
}

export default Timer;
