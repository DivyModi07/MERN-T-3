// Create a react app to construct 2 function named add and sub.Use this function as components in 3rd function and print result on a browser.

function Add(){
    return(
        <>
            <h1>Addition of 5 & 4 is {5+4}</h1>         
        </>
    )
}

function Sub(){
    return(
        <>
            <h1>Substraction of 5 & 4 is {5-4}</h1>         
        </>
    )
}

function Task2(){
    return(
        <>
            <Add />
            <Sub />
        </>
    )
}

// export default Task2
export  {Add,Sub}