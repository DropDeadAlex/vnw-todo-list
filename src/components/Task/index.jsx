import { useContext, useState } from "react"
import { TaskListContext } from "../../contexts/taskList";

import { EditTaskForm } from '../EditTaskForm';

import { Task_, TaskCheck, TaskName, DeleteBtn, EditBtn } from './styles';

const Task = ({ task }) => {
  const { removeTask } = useContext(TaskListContext)
  
  const [editFormOpen, setEditFormOpen] = useState(false)
  const [taskDone, setTaskDone] = useState(task.done)
  const [taskHover, setTaskHover] = useState(false)

  const openEditForm = () => setEditFormOpen(true)

  const deleteTask = () => removeTask(task)

  const toggleTaskDone = () => {
    task.done = !task.done
    setTaskDone(task.done)
  }

  const containnerTask = (s, checked) => (
    `containner-task${checked ? " checked" : ""}`
  )

  const toggleHover = () => setTaskHover(!taskHover)


  return (
    <Task_>
      <div className={containnerTask`${taskDone}`} >
        <TaskCheck 
          onChange={toggleTaskDone} 
          checked={taskDone}  
          onMouseEnter={toggleHover} 
          onMouseLeave={toggleHover} 
          hover={taskHover}
        />

        <TaskName
          onMouseEnter={toggleHover} 
          onMouseLeave={toggleHover} 
          hover={taskHover}
        >
          {task.name}
        </TaskName>
      </div>

      <div className="container-btn">
        <EditBtn onClick={openEditForm}>edit</EditBtn>
        <DeleteBtn onClick={deleteTask}>delete</DeleteBtn>
      </div>

      <EditTaskForm task={task} isOpen={editFormOpen} setOpen={setEditFormOpen} />
    </Task_>
  )
}

export { Task }
