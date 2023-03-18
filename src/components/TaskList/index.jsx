import { List, Task, DeleteBtn } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id}>
          {task.name}
          <DeleteBtn onClick={task.delete}>x</DeleteBtn>
        </Task>
      )}
    </List>
  )
}

export { TaskList }
