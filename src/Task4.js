function Task4(Props){
    return(
        <>
            <h1>{Props.name}</h1>
            <h2>{Props.price}</h2>    
        </>
    )
}

function Task5(Props){
    return(
        <>
            <h1>Hello I am {Props.data.name} from {Props.data.uni}</h1>
        </>
    )
}

// export default Task4
export {Task4,Task5}