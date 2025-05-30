function Task8(Props){
    
    return(
        <>
        {
            Props.obj.map((value)=>{
                return <div style={{display:'inline-block',border:'1px solid black',align:'center',padding:'5px',margin:'10px',justifyContent:'center'}}>
                        <h3>Product Name : {value.name}</h3>
                        <img src={value.img} height='200px' width='200px'/>
                        <h3>Price : {value.price}</h3>
                        <p>Discription : {value.disc}</p>
                        </div>
            })
        }
        </>
    )
    
}

export default Task8