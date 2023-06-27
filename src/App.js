import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState([])
  const [taskList, setTaskList] = useState([])

  const newTask = (event) => {
    const inputTask = event.target.value
    if(inputTask !== ""){
      setTask(inputTask)
    }
  }

  const addTask = (e) => {
    e.preventDefault();
    if(task !== ""){
      setTaskList([...taskList, task])
      setTask("")
    }
  }

  return (
    <div className="App">

        <h1>Lista de Tareas</h1>
        
        <form onSubmit={addTask}>
            <input type="text" placeholder="Nueva tarea" onChange={newTask}/>
            <button type="submit">Agregar tarea</button>
        </form>
        
        <ul>
            <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li>
            {taskList.map((value, index) =>
            <li key={index}>{value}</li>
            )}
        </ul>

    </div>
  );
}

export default App;
