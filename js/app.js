// Select the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

// Classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// Variables
let LIST, id;

// Show todays date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-GB', options);

// add todo function, will take in a toDo variable

function addToDo(toDo, id, done, trash) {
    
    if (trash) {
        return;
    }
    // if completed use the check class
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
}

// add an item to the list, when user enter the key

document.addEventListener('keyup', function(even) {
    if (event.keyCode == 13) {
        const toDo = input.value; //value of the input field from user

        // check if input is valid
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            id++;
        }
        input.value = '';
    }
});

// complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
    // set array to be false if it was true?
}

// remove to do

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener('click', function(event) {
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob == 'completed') {
        completeToDo(element);
    } else if (elementJob == 'delete') {
        removeToDo(element);
    }
});

