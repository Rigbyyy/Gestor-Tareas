
function TaskList ({tasks}) {
  
  const listItems = tasks.map(task =>
    <li
      key={task.id}
      className= {task.isComplete ? 'line-through text-gray-500' : ''}
    >
      {task.text}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );

}

export default TaskList;
