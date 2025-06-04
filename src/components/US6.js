import React from 'react'
import { useState } from 'react'
export default function US6() {
    const [data,setdata]=useState({name:"jeet"})
    function hc(){
        setdata({name:"deep"})
    }
  return (
    <div>
        <h1> dont talk {data.name}</h1>
        <button onClick={hc}>click</button>
    </div>
  )
}