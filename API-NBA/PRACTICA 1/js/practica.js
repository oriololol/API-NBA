const inputFieldEl = document.getElementById("text")
const addButtonEl = document.getElementById("btn") 

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value;
    console.log(inputValue);
})
