import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import "./check.css"
const Todo = () => {
  const count = useSelector((state) => state.counter.value)

    const [task, setTask] = useState('');
    const [todoList , setTodoList] = useState([]);
    function handleAdd() {
        if (task.trim() === '') return; // Prevent adding empty tasks
        setTodoList([...todoList, task]);
        setTask(''); // Clear the input field after adding the task
    }

  return (
    <div>
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List{count}</h1>
        <div className="flex gap-2 mb-4">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}
            className='border border-gray-300 rounded p-2 w-full' placeholder='Add a new task' />
            <button 
            onClick={handleAdd}
            className='bg-blue-500 text-white rounded p-2'
            >Add Task</button>
        </div>
      </div>

      {todoList.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        <ul className="max-w-md mx-auto space-y-2">
          {todoList.map((item, index) => (
            <li key={index} className="border border-gray-300 rounded p-2">
              {item}
                <button className="bg-red-500 text-white rounded p-1 ml-2" onClick={() => {
                    const newList = todoList.filter((_, i) => i !== index);
                    setTodoList(newList);
                }}>Delete</button>
                <input type="checkbox" className="ml-2" onChange={(e) => {
                    const newList = [...todoList];
                    newList[index] = e.target.checked ? <s>{item}</s> : item;
                    setTodoList(newList);
                }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo
