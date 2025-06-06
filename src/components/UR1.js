import { useReducer } from "react";
const initialVale = 0
function UR1() {
    const [state,dispatch] = useReducer(reducer,initialVale)
    function reducer(state, action) {
        if (action.type === 'increment') {
            return state + 1
        } 
    }
    return (<>
        <button onClick={() => dispatch({ type: 'increment' })}>Clicked({state})</button>
    </>)
}
export default UR1