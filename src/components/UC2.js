import { useContext } from "react";
import {Fname,Lname} from './Main1'

function UC2(){
    const firstName = useContext(Fname)
    const lastName = useContext(Lname)

    return(
        <>
            <h1>Your name give by your GrandFather is {firstName} {lastName}</h1>
        </>
    )
}

export default UC2
