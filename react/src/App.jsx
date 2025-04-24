import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Components/TaskList/TaskList';

const tareas = [
  { text: 'Terminar el examen', isComplete: false, id: 1 },
  { text: 'Usar hooks', isComplete: false, id: 2 },
  { text: 'Comprarme una ns200', isComplete: true, id: 3 },
];
function App() {
 

  return (
    
    <form>
  <div className="mb-3">
    <label htmlFor="InputTarea" className="form-label">
      Ingresar la tarea
    </label>
    <input
      type="text"
      className="form-control"
      id="InputTarea"
      aria-describedby="textHelp"
    />
    
  </div>
  
 
  <button type="submit" className="btn btn-dark">
    Agregar Tareas
  </button>
  <TaskList tasks={tareas}></TaskList>
</form>
  )
}

export default App
