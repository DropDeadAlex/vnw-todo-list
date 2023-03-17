import { List, Task } from './styles';

const TaskList = ({ children: taskList }) => {
  return (
    <List>
      {taskList.map((task, index) =>
        <Task key={index}>{task}</Task>
      )}
    </List>
  )
}

export { TaskList }
