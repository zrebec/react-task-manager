import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import Header from './components/Header';
import _ from 'lodash';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState();
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5';

  // asnynchronous call. Yes, it's possible to use axios as well
  const fetchData = async () => {
    try {
      let tasksArray = [];
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.results.map((task, index) => {
            // first letter uppercase
            const taskName = task.name.charAt(0).toUpperCase() + task.name.slice(1);
            tasksArray.push({ id: index, name: taskName });
          });
        });

      console.log('Added tasks:' + tasks.length);
      setTasks(_.isEmpty(...tasks) ? tasksArray : [...tasks, tasksArray]);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    // Add additional example tasks from api after 5 seconds with
    // fetch fetchData promise
    setTimeout(fetchData, 5000);
  }, []);

  const handleChange = (e) => {
    if (e.target.value.length === 1) {
      e.target.value = e.target.value.toUpperCase();
    }
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (_.isNumber(editTaskId)) {
      //editing exisitng task
      console.log(tasks);
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
            console.log('Nasiel som zhodu s: ' + task.id);
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
      <Header />
      <main>
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
          {React.useMemo(
            () =>
              tasks.map((task, index) => {
                return (
                  <Task
                    id={task.id}
                    name={task.name}
                    isFinished={task.isFinished}
                    key={index}
                    onActionButtonClick={handleActionButtonClick}
                  />
                );
              }),
            [tasks]
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
