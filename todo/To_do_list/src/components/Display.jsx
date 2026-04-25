import { useState } from "react"
import { Input } from "./input"
export const Display =({Task})=>{

    const [isUpdate, setisUpdate]=useState(false)
    const [UpdatedTask,setisUpdatedTask]=useState(Task)

    const Update =()=>{
        setisUpdate(!isUpdate)
    }
    return(
        <div>
            {
            isUpdate ?(
                <div>
                <input type="text" value={Task} placeholder="Write your Task" onChange={(e)=>setisUpdatedTask(e.target.value)} />
                </div>
                
    )
            :(
                <div>
                <p>{Task}</p> 
                </div>
            )
            }
            
            <button onClick={Update}>Edit</button>
        </div>
    )
}