function Task9(){
    const arr = [1,2,3,4,3,5,7,3,9]

    var t = arr.map((val,i)=>{
        if(val>3) return(<h2 key={i}>{val}</h2>)
    })
    console.log(t)

    var t1 = arr.filter((val)=>{
        if(val>3) return(<h2>{val}</h2>)
    })
    console.log(t1)

    var t2 = arr.filter((val)=>{
        if(val>3) return(<h2>{val}</h2>)
    })
    var t2 = t2.map((val,i)=>{
        if(val>3) return(<h2 key={i}>{val}</h2>)
    })
    console.log(t2)

    return(
        <>
            <div>{t}</div>
            <div>{t1}</div>
            <div>{t2}</div>
        </>
    )
}

export default Task9