import { useContext } from 'react';
import { TaskListContext } from '../../contexts/taskList';

import { Task } from '../Task';

import { List } from './styles';

const TaskList = () => {
  const { taskList } = useContext(TaskListContext)

  return (
    <List>
      {taskList.map(task =>
        <Task key={task.id} task={task} />
      )}
    </List>
  )
}

export { TaskList }
