const input = document.querySelector(".task");
const add = document.querySelector(".add");
add.addEventListener("click",()=>{
    const show =document.querySelector(".showTask")
    show.innerHTML=input.value
    show.style.fontSize="60px" 
    show.style.textAlign="center" 

})