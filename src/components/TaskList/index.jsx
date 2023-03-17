import { List, Task } from './styles';

const TaskList = ({ children: taskList }) => {
  return (
    <List>
      {taskList.map((task, i) =>
        <Task key={i}>{task}</Task>
      )}
    </List>
  )
}

export { TaskList }
