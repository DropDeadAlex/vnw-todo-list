import { List, Task, ContainerBtn, ContainnerTask, DeleteBtn } from './styles';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task =>
        <Task key={task.id}>
          <ContainnerTask>
            {/* <input type="checkbox"></input> */}
            <span 
              onClick={task.toggleDone}   
              className={task.done ? "task-checked" : ""}
            ></span>
            <span>{task.name}</span>
          </ContainnerTask>
          <ContainerBtn>
            <DeleteBtn onClick={task.delete}>delete</DeleteBtn>
          </ContainerBtn>
        </Task>
      )}
    </List>
  )
}

export { TaskList }
