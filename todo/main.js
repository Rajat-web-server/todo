const input = document.querySelector(".task");
const add = document.querySelector(".add");
const show = document.querySelector(".showTask");
const Delete = document.querySelector(".delete");
const Update = document.querySelector(".update")

//Here the thing I have created is creating and deleting functions
let taskList = []
let editIndex = null;
add.addEventListener("click", () => {

    if(input.value === "") return;

    // UPDATE MODE
    if(editIndex !== null){
        taskList[editIndex] = input.value;
        editIndex = null;
        add.textContent = "Add Task";
    }
    // ADD MODE
    else{
        taskList.push(input.value);
    }

    input.value = "";
    renderTasks();   // ← we will create this function next
});

function renderTasks(){
    show.innerHTML = "";

    taskList.forEach((task, index) => {

        const taskEl = document.createElement("p");
        taskEl.textContent = task;
        taskEl.style.fontSize = "30px";
        taskEl.style.textAlign = "center";

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.style.margin = "5px";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.margin = "5px";

        // UPDATE BUTTON LOGIC 🔥
        updateBtn.addEventListener("click", () => {
            input.value = task;
            editIndex = index;
            add.textContent = "Update Task";
        });

        // DELETE ONE TASK 🔥
        deleteBtn.addEventListener("click", () => {
            taskList.splice(index,1);
            renderTasks();
        });

        show.appendChild(taskEl);
        show.appendChild(updateBtn);
        show.appendChild(deleteBtn);
    });
}


Delete.addEventListener("click", () => {
    taskList = [];
    renderTasks();
});



//Phase -2 
// 1. Delete one task
//2. Update one task
//3. Attach buttons per task

//How can I add the updating function :




