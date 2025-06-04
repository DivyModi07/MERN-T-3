import {useState} from 'react'

function US8(){
    const[Task,setTask] = useState(" ")
    const[Todo,setTodo] = useState([])

    function hc(event){
        setTask(event.target.value)
    }

    function addtask(event){
    //     setTodo([...Todo,Task])
        // OR
        if(!Todo.includes(Task)){
            setTodo([...Todo,Task])
        }
        else{
            alert('Task Added')
        }
    }

    function deleteTask(taskName){
        setTodo(Todo.filter((task)=>{
            if(task!==taskName){
                return true
            }
            else{
                return false
            }
        }))
    }

    return (
    <div>
        <input onChange={hc}/>
        <button onClick={addtask}>Add</button>
        {/* {
            Todo.map((task)=>{
                return <h1>{task}</h1>
            })
        } */}
        {
            Todo.map((task)=>{
                return(
                    <>
                    <h1>{task}</h1>
                    <button onClick={()=>deleteTask(task)}>Delete</button>
                    </>
                )
            })
        }
    </div>
  )
}

export default US8