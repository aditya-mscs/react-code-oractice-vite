import { useState } from "react"
import GoBackToHome from "./GoBacktoHome"


const ToDoList = () => {
  type Task = {
    id: number,
    task: string
  }
  const [toDoList, setToDoList] = useState<Task[]>([])

  const addTask = () => {
    const task = (document.getElementById("task") as HTMLInputElement).value.trim();
    if (task) {
      //Add to top of list
      const newTask: Task = { id: Date.now(), task };
      setToDoList([newTask, ...toDoList]);
    }
    (document.getElementById("task") as HTMLInputElement).value = ""
  }

  const removeTaskFromList = (event: React.MouseEvent<HTMLButtonElement>) => {
    const taskId = Number(event.currentTarget.getAttribute('data-task-id'));
    setToDoList(toDoList.filter(task => task.id !== taskId));
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div>
      <GoBackToHome />
      <h1>To Do List</h1>

      <input type="text" id="task" placeholder="Enter task" onKeyUp={handleKeyUp} />
      <button type="button" onClick={addTask}>Add</button>

      {toDoList.length > 0 &&
        <ul>
          {toDoList.map((task) => (
            <div key={task.id}>
              <li>{task.task}</li>
              <button type="button" data-task-id={task.id} onClick={removeTaskFromList}>Remove</button>
            </div>
          ))}
        </ul>
      }
      {toDoList.length === 0 && <p>No tasks</p>}
    </div>
  )
}

export default ToDoList
