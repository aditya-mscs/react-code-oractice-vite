import { useState } from "react"
import GoBackToHome from "./GoBacktoHome"

type Task = {
  id: number,
  task: string
}

//BEST APPROACH: useRef for input
//const inputRef = useRef<HTMLInputElement>(null); ------------> IMPORTANT LINE
//const task = inputRef.current?.value.trim(); // Safely access the input value
//setToDoList([newTask, ...toDoList]); // Important line
//if (inputRef.current) inputRef.current.value = "";
//<input type="text" ref={inputRef} />

//Another approach: Add state for input ---> NOT GOOD
// <input
// value={input}
// onChange={(e) => setInput(e.target.value)}
// const handleAddItem = useCallback(() => {
//   setItems((prev) => [input, ...prev])
//   setInput('')
// }, [input]);

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<Task[]>([]) //Note definition during useState

  const addTask = () => {
    const task = (document.getElementById("task") as HTMLInputElement).value.trim(); //This apporach avoid adding input state
    if (task) {
      //Add to top of list
      const newTask: Task = { id: Date.now(), task }; // Using Date.now() as id to make it unique
      setToDoList([newTask, ...toDoList]); //---------> ONLY IMPORTANT LINE
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
