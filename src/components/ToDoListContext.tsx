import { use, useState } from "react"
import GoBackToHome from "./GoBacktoHome"
import React from "react";

type Task = {
  task: string;
  desc: string;
}
type ToDoListContextType = {
  toDoList: Task[];
  setToDoList: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Create context with correct default
const ToDoListContext = React.createContext<ToDoListContextType | undefined>(undefined);



export const ToDoListUsingContext = () => {
  const [toDoList, setToDoList] = useState([]);
  console.log('ToDoListUsingContext: ', toDoList);

  return (
    <>
      <GoBackToHome />
      <ToDoListContext value={{ toDoList, setToDoList }}>
        <div>The tasks are: {toDoList.length}</div>
        <ToDoListChild />
      </ToDoListContext>
    </>
  )
}




const ToDoListChild = () => {
  const context = use(ToDoListContext)
  if (!context) throw new Error("ToDoListChild must be used within a ToDoListContext.Provider");

  const { toDoList, setToDoList } = context;
  const [desc, setDesc] = useState<string>('desc 1')


  const handleOnClick = () => {
    const task = (document.getElementById('task') as HTMLInputElement).value; //______ not value()
    const desc = (document.getElementById('desc') as HTMLInputElement).value;

    if (task && desc) {
      setToDoList(prev => [{ task: task, desc: desc }, ...prev]);
      (document.getElementById('task') as HTMLInputElement).value = '';  //______ not value()
      setDesc('')
    }
    console.log('handleOnClick: ', task)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" id="task" defaultValue="task 1" /> {/*______ CANT USE value="task 1". use defaultValue */}
      <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} /> {/* rem onChange if value as state */}
      <button type="button" onClick={handleOnClick}>Add</button>
      {toDoList && toDoList.map(task => (
        <div key={task.task}>{task.task} - {task.desc}</div>
      ))}
    </div>
  )
}
