import { useState } from "react"
import GoBackToHome from "./GoBacktoHome"

type Task = {
  task: string;
  desc: string;
}
export const ToDoListProps = () => {
  const [taskList, setTaskList] = useState<Task[]>([]) //useState<Task[]>
  return (
    <>
      <GoBackToHome />
      <ToDoListChild setTaskList={setTaskList} /> {/*_________ pass setTaskList to child */}

      <div>The tasks are:</div>
      {taskList && taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={'task-' + Math.random()} className="task">
            {/* ___________ Math.random for keys */}
            <h1>{task?.task}</h1>
            <p>{task?.desc}</p>
          </div>
        ))) : <p>No tasks</p>}

    </>
  )
}




const ToDoListChild = ({ setTaskList }: { setTaskList: React.Dispatch<React.SetStateAction<Task[]>> }) => {
  const [desc, setDesc] = useState<string>('desc 1')
  // console.log(setTaskList)
  const handleOnClick = () => {
    const task = (document.getElementById('task') as HTMLInputElement).value; //______ not value()
    const desc = (document.getElementById('desc') as HTMLInputElement).value;

    if (task && desc) {
      setTaskList(prev => [{ task: task, desc: desc }, ...prev]);
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
    </div>
  )
}
