import React, { useState } from 'react';
import Task from './components/task';

function App() {
	const [newTask, setNewTask] = useState('');
	const [tasks, setTasks] = useState([]);
	const [editTaskId, setEditTaskId] = useState();

	const handleChange = (e) => {
		if (e.target.value.length === 1) {
			e.target.value = e.target.value.toUpperCase();
		}
		setNewTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editTaskId > 0) {
			//editing exisitng task
			let newTasksArray = [...tasks];
			let newTask = newTasksArray[editTaskId];
			newTask.name = newTask;
			setTasks(newTasksArray);
		} else {
			//creating new task
			setTasks([
				{
					id: [...tasks].length === 0 ? 0 : Math.max(...tasks.map((task) => task.id)) + 1,
					name: newTask,
					isFinished: false,
				},
				...tasks,
			]);
		}
		setNewTask('');
	};

	const handleActionButtonClick = (buttonValues) => {
		switch (buttonValues.type) {
			case 'edit':
				tasks.map((task) => {
					if (task.id === buttonValues.id) {
						setNewTask(task.name);
						setEditTaskId(task.id);
						return;
					}
				});
				break;
			case 'delete':
				setTasks(tasks.filter((task) => task.id !== buttonValues.id));
				break;
			default:
				//TODO: We shoudn't reverse array. Instead of that we shoud find a right id in a array and change value
				console.log(buttonValues.id);
				let newTasksArray = [...tasks].reverse();
				let newTask = newTasksArray[buttonValues.id];
				//if task if already finished we can return state
				if (newTask.isFinished) newTask.isFinished = false;
				else newTask.isFinished = true;

				setTasks(newTasksArray.reverse());
		}
	};

	return (
		<div className="container">
			<h1>Task Manager</h1>
			<React.StrictMode>
				<form onSubmit={handleSubmit}>
					<label htmlFor="newTaskInput" className="sr-only">
						Input for new task
					</label>
					<input
						id="newTaskInput"
						type="text"
						onChange={handleChange}
						value={newTask}
						placeholder="Add new task here..."
						autoFocus
					/>
				</form>
				<ul>
					{tasks.map((task, index) => {
						return (
							<Task
								id={task.id}
								name={task.name}
								isFinished={task.isFinished}
								key={index}
								onActionButtonClick={handleActionButtonClick}
							/>
						);
					})}
				</ul>
			</React.StrictMode>
		</div>
	);
}

export default App;
