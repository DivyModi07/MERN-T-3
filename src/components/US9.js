// Write a code to +,-,*,/ of two number using hook.

import React from 'react'
import { useState } from 'react'
function US9() {
    const [num1,setadd]=useState("")
    const [fname,setFname]=useState("")
    function h1(){
        setadd(n1.target.value)
    }
    function h1(){
        setadds(n1.target.value)
    }
  return (
    <div>
        Num1:<input type="number" onChange={hc1} value={num1} id='n1'/>
        Num2:<input type="number" onChange={hc2} value={num2} id='n2'/><br/><br/>
        <button onClick={h1}>Add</button>
        <button onClick={h2}>Sub</button>
        <button onClick={h3}>Mul</button>
        <button onClick={h4}>Div</button>
    </div>
  )
}

export default US9