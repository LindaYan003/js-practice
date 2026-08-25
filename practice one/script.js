// JavaScript source code
/*Practical Exercise 1 — Todo List(DOM + events + localStorage)

Build a todo list: add, toggle complete, delete, and filter(All / Active / Completed)

Persist the list to localStorage so it survives a page refresh

Plain index.html + script.js — no framework, no build tool, no npm package*/

const list = document.getElementById('todo-list');
const todos = JSON.parse(localStorage.getItem('todos')) || []; // load array (fallback to empty)
const form = document.getElementById('todo-form');
const all = document.getElementById('all');
const complete = document.getElementById('completed');



//function for loading
function loadComplete() {
    console.log('loading completed saved data');
    list.innerHTML = '';
    todos.forEach(function (todo, index) {
        if (todo.completed) {
            console.log(index, todo.text, todo.completed);
            const newTodo = document.createElement('li');
            newTodo.classList.add('todo-item');

            if (todo.completed) {
                newTodo.classList.add('completed');
            }

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;



            checkbox.addEventListener('click', function () {
                todos[index].completed = !todos[index].completed;
                saveTodos();
                loadComplete();
                console.log('changed entry with index ' + index + ' completed to: ' + todos[index].completed);

            });

            const text = document.createElement('span');
            text.classList.add('label');
            text.textContent = todo.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'X';

            deleteBtn.addEventListener('click', function () {
                console.log(todos);
                todos.splice(index, 1); // remove this one item from the array
                saveTodos();
                loadComplete();
            });

            // put them together
            newTodo.appendChild(checkbox);
            newTodo.appendChild(text);
            newTodo.appendChild(deleteBtn);

            list.appendChild(newTodo);

        }

    });
}
function load() {
    console.log('loading saved data');
    list.innerHTML = '';
    todos.forEach(function (todo, index) {
        console.log(index, todo.text, todo.completed);
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');

        if (todo.completed) {
            newTodo.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
       


        checkbox.addEventListener('click', function () {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            load();
            console.log('changed entry with index '+ index +' completed to: '+ todos[index].completed);

        });

        const text = document.createElement('span');
        text.classList.add('label');
        text.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';

        deleteBtn.addEventListener('click', function () {
            console.log(todos);
            todos.splice(index, 1); // remove this one item from the array
            saveTodos();
            load();
        });

        // put them together
        newTodo.appendChild(checkbox);
        newTodo.appendChild(text);
        newTodo.appendChild(deleteBtn);

        list.appendChild(newTodo);

        
        
    });

}

//save todos
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


//for every refresh


load();





//test
/*const sample = document.createElement('li');
sample.textContent = 'example';

list.appendChild(sample);*/
//console.log(todos);

//add

form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop default page reload

    const addition = document.getElementById('todo-input').value.trim();
    if (!addition) return;
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item'); 
   

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    const text = document.createElement('span');
    text.classList.add('label'); 
    text.textContent = addition;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'X';

    // put them together
    newTodo.appendChild(checkbox);
    newTodo.appendChild(text);
    newTodo.appendChild(deleteBtn);

    list.appendChild(newTodo);
    todos.push({ text: addition, completed: false });
    saveTodos();

    console.log('added', addition);

    load();

});



//filter 
all.addEventListener('click', function () {
    load();
});
    

complete.addEventListener('click', function () {
    loadComplete();
});

