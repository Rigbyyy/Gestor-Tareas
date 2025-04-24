const Task = ({ tarea, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={tarea.iscomplete}
          onChange={() => onToggle(task.id)}
        />
        <span className={tarea.iscomplete ? 'line-through text-gray-500' : ''}>{tarea.text}</span>
      </label>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => onDelete(tarea.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default Task;
