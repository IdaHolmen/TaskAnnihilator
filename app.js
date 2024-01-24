document.addEventListener('DOMContentLoaded', () => {
	const taskContainer = document.querySelector('.input-container');
	const taskInput = document.querySelector('.task-input');

	const addTask = () => {
		let taskValue = taskInput.value.trim();
		if (taskValue) {
			let taskElement = document.createElement('div');
			taskElement.textContent = taskValue;
			taskElement.className = 'task';
			taskContainer.appendChild(taskElement);
			taskInput.value = '';
		}
	};

	taskInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			addTask();
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
    const monsters = document.querySelectorAll('.monster');

    monsters.forEach(monster => {
        monster.addEventListener('click', function() {
            const selectedMonster = this.getAttribute('alt');
            localStorage.setItem('selectedMonster', selectedMonster);
            window.location.href = 'battle-page.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const selectedMonster = localStorage.getItem('selectedMonster');
    if(selectedMonster) {
        console.log('Battle with:', selectedMonster);
    }
});
