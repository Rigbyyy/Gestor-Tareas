function TaskList () {
  const [count, setCount] = useState(0)

  return (

  
   <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Completado
    </label>
   </div>
  )
}

export default TaskList;
