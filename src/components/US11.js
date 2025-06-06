import React from 'react'
import { useState } from "react";
import img1 from './image10.jpg';
import img2 from './image11.jpg';

export default function US11() {
    const gallery=[{id:1,pic:img1,category:'1'},{id:2,pic:img2,category:'2'}]
    const [image,setImage]=useState(gallery)
   
    function hc(item){
        const filldata=gallery.filter((value)=>value.category===item)
        if(item!='all'){setImage(filldata)}
        else{setImage(gallery)}
    }
  return (
    <>
    <div>
        <input type='button' onClick={()=>hc('all')} value='all'/>
        <input type='button' onClick={()=>hc('1')} value='1'/>
        <input type='button' onClick={()=>hc('2')} value='2' />

    </div>
    {image.map((val)=>{
        return(
            <>
            <img src={val.pic} style={{height:'500px',width:'500px'}}></img>
            </>
        )
    })}
    </>

  )
}
