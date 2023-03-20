import { List, Task, ContainerBtn, DeleteBtn } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id}>
          {task.name}
          <ContainerBtn>
            <DeleteBtn onClick={task.delete}>close</DeleteBtn>
          </ContainerBtn>
        </Task>
      )}
    </List>
  )
}

export { TaskList }
