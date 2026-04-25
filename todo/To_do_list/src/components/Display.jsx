import { useState } from "react"
import { Input } from "./input"
export const Display =({Task, setTask, index, updateTaskList})=>{

    const [isUpdate, setisUpdate]=useState(false)
    const [UpdatedTask,setisUpdatedTask]=useState(Task)

    const Update =()=>{
        setisUpdate(!isUpdate)
    }

    const Submit =()=>{
        updateTaskList(index,UpdatedTask)
        setisUpdate(false)
    }
    const Delete =()=>{
        setTask("")
    }
    return(
        <div>
            {
            isUpdate ?(
                <div>
                <input type="text" value={UpdatedTask} placeholder="Write your Task" onChange={(e)=>setisUpdatedTask(e.target.value)} />
                <button onClick={Submit}>Submit</button>
                <p>{UpdatedTask}</p>
                </div>
    )
            :(
                <div>
                <p>{Task}</p> 
                </div>
            )
            }
            
            <button onClick={Update}>Edit</button>
            <button onClick={Delete}>Delete</button>
        </div>
    )
}