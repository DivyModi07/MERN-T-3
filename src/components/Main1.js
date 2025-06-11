import React, { createContext } from "react"
import Comp1 from './Comp1'
// import UC1 from "./UC1"

// const Fname = createContext(); 
// const Lname = createContext();

const Num1 = createContext(); 
const Num2 = createContext();

function Main1(){

    return (
    <>
        <Num1.Provider value="6">  
            <Num2.Provider value="8">
                <Comp1/>
            </Num2.Provider>
        </Num1.Provider>
    </>

    ) }

export default Main1

// export {Fname,Lname}  

export {Num1,Num2}  
