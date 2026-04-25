

export const Input =( {setTask, Task})=>{

    return(

        <div>
            <input type="text" value={Task} placeholder="Write your Task" onChange={(e)=>setTask(e.target.value)} />
        
        </div>
    )
}