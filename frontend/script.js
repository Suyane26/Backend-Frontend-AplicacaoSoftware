let currentFilter = 'all';

// Adicionar tarefa
document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        textSpan.className = 'task-text';
        li.appendChild(textSpan);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        // Botão Concluir
        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✓';
        doneBtn.className = 'done-btn';
        doneBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            applyFilter(); 
        });

        // Botão Excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        actionsDiv.appendChild(doneBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(actionsDiv);
        
        document.getElementById('taskList').appendChild(li);
        input.value = '';
        
        applyFilter(); 
    }
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Altera o botão ativo visualmente
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        
        // Define qual filtro aplicar
        if(e.target.id === 'filterAll') currentFilter = 'all';
        if(e.target.id === 'filterPending') currentFilter = 'pending';
        if(e.target.id === 'filterCompleted') currentFilter = 'completed';
        
        applyFilter();
    });
});

function applyFilter() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');
        
        if (currentFilter === 'all') {
            task.classList.remove('hidden');
        } else if (currentFilter === 'pending') {
            if (isCompleted) task.classList.add('hidden');
            else task.classList.remove('hidden');
        } else if (currentFilter === 'completed') {
            if (isCompleted) task.classList.remove('hidden');
            else task.classList.add('hidden');
        }
    });
}