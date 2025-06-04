import {Hookname} from 'react'
import React,{useState} from 'react'

function Hook(){
    const[count,setCount] = useState(0)

    function hc(){
        if (count<10){
            setCount(count+1)
        }
    }

    return(
        <><h1>{count}</h1>
        <button onClick={hc}>Click</button></>
    )
}

export default Hook