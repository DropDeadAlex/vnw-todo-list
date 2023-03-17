import { List, Task } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task, index) =>
        <Task key={index}>{task}</Task>
      )}
    </List>
  )
}

export { TaskList }
