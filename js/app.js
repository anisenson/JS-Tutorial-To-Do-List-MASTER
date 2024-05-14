// CODE EXPLAINED channel

//Select the Elements
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dataElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addtoDo(toDo, id, done, trash) {
    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = ` <li class ="item">
                <i class="fa fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
    `
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}

//add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        //if the input isn't empty
        if(toDo){
            addtoDo(toDo);
        }
        input.value = "";
    }
})

// complete to do 
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}