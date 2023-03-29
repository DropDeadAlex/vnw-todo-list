import { useState } from "react"

import { EditTaskForm } from '../EditTaskForm';
import { Task_, TaskCheck, TaskName, DeleteBtn } from './styles';

const Task = ({ task }) => {
  const [editFormOpen, setEditFormOpen] = useState(false)
  const [taskDone, setTaskDone] = useState(task.done)

  const openEditForm = () => setEditFormOpen(true)

  const toggleTaskDone = () => {
    task.done = !task.done
    setTaskDone(task.done)
  }

  return (
    <Task_>
      <div className="containner-task">
        <TaskCheck onChange={toggleTaskDone} checked={taskDone} />

        <TaskName>{task.name}</TaskName>
      </div>

      <div className="container-btn">
        <DeleteBtn onClick={openEditForm}>edit</DeleteBtn>
        <DeleteBtn onClick={task.delete}>delete</DeleteBtn>
      </div>

      <EditTaskForm task={task} isOpen={editFormOpen} setOpen={setEditFormOpen} />
    </Task_>
  )
}

export { Task }
