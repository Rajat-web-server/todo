const input = document.querySelector(".task");
const add = document.querySelector(".add");
add.addEventListener("click", () => {
    const show = document.querySelector(".showTask")
    show.innerHTML = input.value;
    show.style.fontSize = "60px"
    show.style.textAlign = "center"
})
const remove = document.querySelector(".delete");
remove.addEventListener("click", () => {
    const show = document.querySelector(".showTask")
    show.innerHTML = "";
})

const hours = document.getElementById("hour");
for (let i=1;i<=12;i++){
    const option = document.createElement("option");
    option.value=i;
    option.textContent=i;
    hours.appendChild(option);
}

const minutes = document.getElementById("mins");
for (let i=1;i<=60;i++){
    const option = document.createElement("option");
    option.value=i;
    option.textContent=i;
    minutes.appendChild(option);
}

const months = document.getElementById("month");
for (let i=1;i<=12;i++){
    const option = document.createElement("option");
    option.value=i;
    option.textContent=i;
    months.appendChild(option);
}

const days = document.getElementById("day");
for (let i=1;i<=31;i++){
    const option = document.createElement("option");
    option.value=i;
    option.textContent=i;
    days.appendChild(option);
}

