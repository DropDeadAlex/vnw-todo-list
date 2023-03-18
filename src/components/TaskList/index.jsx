import { List, Task } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id}>
          {task.name}
          <button onClick={task.delete}>x</button>
        </Task>
      )}
    </List>
  )
}

export { TaskList }
