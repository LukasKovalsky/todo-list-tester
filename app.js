// Získaj elementy z HTML
const input = document.getElementById('todoInput');
const button = document.getElementById('addButton');
const list = document.getElementById('todoList');

// Funkcia na pridanie tasku
function addTask() {
    // Získaj text z inputu
    const taskText = input.value;
    
    // Ak je prázdny, neurob nič
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Vytvor nový list item
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    
    // Pridaj delete tlačidlo
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    // Vyčisti input
    input.value = '';
}

// Keď klikneš na button, zavolaj addTask
button.onclick = addTask;

// Keď stlačíš Enter v inpute, pridaj task
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});