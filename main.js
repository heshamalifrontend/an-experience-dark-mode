let body = document.body;

let check = document.querySelector("#toggle")

check.addEventListener("click" , () =>{
    body.classList.toggle("active")
})