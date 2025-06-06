import React, { useReducer } from 'react'

export default function UR2() {
    const [state,dispatch]=useReducer(reducer,5)
    function reducer(state,action){
        return state+action
    }

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(5)}>Add</button>
    </div>
  )
}
