import { List } from './styles';
import { Task } from '../Task';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id} task={task} />
      )}
    </List>
  )
}

export { TaskList }
