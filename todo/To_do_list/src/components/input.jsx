import './input.css'

export const Input =( {setTask, Task})=>{

    return(

        <div className="input_container">
            <input className='input' type="text" value={Task} placeholder="Write your Task" onChange={(e)=>setTask(e.target.value)} />
        
        </div>
    )
}