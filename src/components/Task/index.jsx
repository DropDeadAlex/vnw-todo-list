import { Task_, TaskCheck, TaskName, DeleteBtn } from './styles';

const Task = ({ task }) => {
  return (
    <Task_>
      <div className="containner-task">
        <TaskCheck onChange={task.toggleDone} checked={task.done} />
            
        <TaskName>{task.name}</TaskName>
      </div>

      <div className="container-btn">
        <DeleteBtn onClick={task.delete}>edit</DeleteBtn>
        <DeleteBtn onClick={task.delete}>delete</DeleteBtn>
      </div>
    </Task_>
  )
}

export { Task }
