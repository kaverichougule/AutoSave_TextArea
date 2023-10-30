let textarea=document.querySelector("#myTextarea")
textarea.addEventListener("input",()=>{
    console.log(textarea.value);
    localStorage.setItem("text",textarea.value)
})
textarea.value=localStorage.getItem("text")

let reload=document.querySelector(".reload")
reload.addEventListener("click",()=>{
    localStorage.clear()
    textarea.value=""
})