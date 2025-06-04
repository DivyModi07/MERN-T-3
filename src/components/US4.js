import {useState} from 'react'
import img1 from './img3.png'
import img2 from './img4.png'


function US4(){
    const [img,setimg] = useState(img1)

    function hc(){
        setimg(i=>(i===img1?img2:img1))
    }

    return(
        <>
            <img src={img} height='200px' width='200px'/>
            <button onClick={hc}>Change Image</button>
        </>
    )
}

export default US4