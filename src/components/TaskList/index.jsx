import { List, Task, TaskDone, TaskName, DeleteBtn } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id}>
          <div className="containner-task">
            <TaskDone onChange={task.toggleDone} checked={task.done} />
            
            <TaskName>{task.name}</TaskName>
          </div>

          <div className="container-btn">
            <DeleteBtn onClick={task.delete}>delete</DeleteBtn>
          </div>
        </Task>
      )}
    </List>
  )
}

export { TaskList }
