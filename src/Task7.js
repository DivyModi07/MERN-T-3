function Task7(){
    function handleClick(){
        alert('You CLicked')
    }

    function handleSubmit(e){
        e.preventDefault()
        alert('Your form submitted')
    }

    function handleChange(event){
        console.log(event.target.value);
    }

    const score = (a)=>{alert(`Super${a}`)}

return(
    <>
        <button onClick={handleClick}>Click Me</button>
        <form onSubmit={handleSubmit}>
            <input type='text'/>
            <input type='submit'/>
            <input type='text' onChange={handleChange} />
        </form>
        <button onClick={()=>score('Sixer')}>Big Hit</button>
    </>
)
}

export default Task7