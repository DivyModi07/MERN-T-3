import React from 'react'
import { useState } from 'react'
function US5() {
    const [fname,setFname]=useState("")
    function hc(event){
        setFname(event.target.value)
    }
  return (
    <div>
        <input type="text" onChange={hc} value={fname}/>
        <h1> welcome {fname}</h1>
    </div>
  )
}

export default US5