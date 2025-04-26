import GoBackToHome from "./GoBacktoHome"

const ToDoListChild = () => {
  const handleOnClick = () => {
    const task = (document.getElementById('task') as HTMLInputElement).value

    console.log('handleOnClick: ', task)
  }
  return (
    <div>
      <h1>To Do List</h1>
      <input id="task" />
      <button type="button" onClick={handleOnClick}>Add</button>
    </div>
  )
}

export const ToDoListProps = () => {

  return (
    <>
      <GoBackToHome />
      <div>Hello</div>
      <ToDoListChild />
    </>
  )
}