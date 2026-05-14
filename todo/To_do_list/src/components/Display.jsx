import { useState } from "react";
import { Input } from "./input";
import "./display.css";
export const Display = ({
  Task,
  index,
  updateTaskList,
  deleteTask,
  Checkbox,
  setCheckbox,
}) => {
  const [isUpdate, setisUpdate] = useState(false);
  const [UpdatedTask, setisUpdatedTask] = useState(Task);

  const Update = () => {
    setisUpdate(!isUpdate);
  };

  const Submit = () => {
    updateTaskList(index, UpdatedTask);
    console.log("display task :", UpdatedTask);
    setisUpdate(false);
  };
  const Delete = () => {
    deleteTask(index);
  };
  const checked = () => {
    setCheckbox(!Checkbox);
  };
  return (
    <div className="box">
      {isUpdate ? (
        <div className="edit_input">
          <input
            type="text"
            value={UpdatedTask}
            placeholder="Write your Task"
            onChange={(e) => setisUpdatedTask(e.target.value)}
          />
          <button onClick={Submit}>Submit</button>
          <p>{UpdatedTask}</p>
        </div>
      ) : (
        <div>
          <p>{Task}</p>
        </div>
      )}
      <div className="button_container">
        <button onClick={Update}>Edit</button>
        <button onClick={Delete}>Delete</button>
        <input type="checkbox" onChange={checked} />
      </div>
    </div>
  );
};
