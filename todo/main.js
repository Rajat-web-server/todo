const input = document.querySelector(".task");
const add = document.querySelector(".add");
const show = document.querySelector(".showTask");
const Delete = document.querySelector(".delete");
const Update = document.querySelector(".update")

//Here the thing I have created is creating and deleting functions
let taskList = []
add.addEventListener("click", () => {


    show.innerHTML = ''
    taskList.push(input.value)
    input.value = '';
    console.log(taskList)
    taskList.forEach((task, index) => {

        console.log("Task under the foreach : ", task, index)

        const taskEl = document.createElement("p");
        taskEl.textContent = task;

        show.appendChild(taskEl);
        show.style.fontSize = "30px"
        show.style.textAlign = "center"


    }
    )

})


Delete.addEventListener("click", () => {
    const show = document.querySelector(".showTask")
    taskList = []
    show.innerHTML = "";
    console.log(taskList)
    console.log("UI : ", input.value)
})





//How can I add the updating function :





// window.addEventListener("load",()=>{
//     const value= localStorage.getItem("Tasks");
//     show.innerHTML=value;
//     show.style.fontSize = "60px"
//     show.style.textAlign = "center"
// })


// const hours = document.getElementById("hour");
// for (let i=1;i<=12;i++){
//     const option = document.createElement("option");
//     option.value=i;
//     option.textContent=i;
//     hours.appendChild(option);
// }

// const minutes = document.getElementById("mins");
// for (let i=1;i<=60;i++){
//     const option = document.createElement("option");
//     option.value=i;
//     option.textContent=i;
//     minutes.appendChild(option);
// }

// const months = document.getElementById("month");
// for (let i=1;i<=12;i++){
//     const option = document.createElement("option");
//     option.value=i;
//     option.textContent=i;
//     months.appendChild(option);
// }

// const days = document.getElementById("day");
// for (let i=1;i<=31;i++){
//     const option = document.createElement("option");
//     option.value=i;
//     option.textContent=i;
//     days.appendChild(option);
// }


