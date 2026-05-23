const form = document.getElementById('userInput');
const taskList = document.getElementById('taskList');
const stats = document.getElementById('stats');
const taskInput = form.querySelector('input[type="text"]');

// Añade tarea nueva y actualiza el contador
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.innerHTML = `
        <input type="checkbox">
        <label>${text}</label>
        <img src="IMG/compartimiento.png" class="closeBtn" alt="Eliminar tarea">
    `;

    taskList.appendChild(taskContainer);
    taskInput.value = '';
    taskInput.focus();
    updateStats();
});

// Borra tarea o actualiza contador al marcar como completada
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeBtn')) {
        const taskContainer = event.target.closest('.task-container');
        // Elimina la tarea y actualiza el contador
        if (taskContainer) {
            taskContainer.remove();
            updateStats();
        }
        // Si no se encuentra el contenedor, no se hace nada
    } else if (event.target.matches('input[type="checkbox"]')) {
        updateStats();
    }
});

// Función para actualizar el contador de tareas pendientes y completadas
function updateStats() {
    const tasks = taskList.querySelectorAll('.task-container');
    const completed = taskList.querySelectorAll('.task-container input[type="checkbox"]:checked').length;
    const pending = tasks.length - completed;
    stats.textContent = `Tareas pendientes: ${pending} || Tareas completadas: ${completed}`;
}

updateStats();