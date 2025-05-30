function Task6(Props){
    return(
        <div style={{display:'inline-block',border:'1px solid black',align:'center',padding:'5px'}}>
            <h3>Product Name : {Props.name}</h3>
            <img src={Props.img} height='200px' width='200px'/>
            <h3>Price : {Props.price}</h3>
            <p>Discription : {Props.disc}</p>
        </div>
    )
}

export default Task6