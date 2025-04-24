
function TaskList ({tasks}) {
  
  const listItems = tasks.map(task =>
    <li
      key={task.id}
      style={{
        color: task.isComplete ? 'green' : 'red'
      }}
    >
      {task.text}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );

}

export default TaskList;
