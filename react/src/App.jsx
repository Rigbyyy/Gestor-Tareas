import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Components/TaskList/TaskList';
function App() {
 /* const [count, setCount] = useState(0)
<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>*/

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
      aria-describedby="emailHelp"
    />
    
  </div>
  
 
  <button type="submit" className="btn btn-dark">
    Agregar Tareas
  </button>
</form>
  )
}

export default App
