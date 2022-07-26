// Code WIP
let input = document.querySelector("#addToDo");
input.addEventListener("keyup", addTodo);

let ul = document.querySelector("ul");

function addTodo(event) {
    if(event.keyCode == 13){
    let task = event.target.value;
    ul.innerHTML += `<li><span><i class="fa fa-trash"></i></span>${task}</li>`;
    console.log(event, "event");
}
}




