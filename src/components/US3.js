import {useState} from 'react'

function US3(){
    const [style,setStyle] = useState('tomato')
    const [data,setdata] = useState(' ')

    function hc(){
        setStyle('cyan')
        setdata('Welcome Champion!!!')
    }

    return(
        <>
            <h1 style={{backgroundColor:style}}>Hello</h1>
            <button onClick={hc}>change CSS</button>
            <h3>{data}</h3>
        </>
    )
}

export default US3