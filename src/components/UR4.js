import {useReducer} from 'react'

function UR4(){
    const [state,dispatch] = useReducer(reduce,{num1:'',num2:'',result:''})

    function reduce(state,action){
        const num1 = Number(state.num1)
        const num2 = Number(state.num2)

        switch(action.type){
            case "setnum1":
                return {...state,num1:action.value}

             case "setnum2":
                return {...state,num2:action.value}

             case "ADD":
                return {...state,result:num1+num2}

             case "SUB":
                return {...state,result:num1-num2}

             case "MUL":
                return {...state,result:num1*num2}

             case "DIV":
                return {...state,result:num1/num2}

             default:
                return state
        }

    }
    return (
    <div>
        Num1:<input type='number' value={state.num1} onChange={(e)=>dispatch({type:'setnum1',value:e.target.value})} />
        Num2:<input type='number' value={state.num2} onChange={(e)=>dispatch({type:'setnum2',value:e.target.value})} />
        <div>
            <button onClick={()=>dispatch({type:'ADD'})}>ADD</button>
            <button onClick={()=>dispatch({type:'SUB'})}>SUB</button>
            <button onClick={()=>dispatch({type:'MUL'})}>MUL</button>
            <button onClick={()=>dispatch({type:'DIV'})}>DIV</button>
        </div>

        <h3>Result : {state.result}</h3>

    </div>
  )

}

export default UR4