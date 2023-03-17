import { InputTask, AddTask } from './styles';

const TaskForm = ({ config: { handle, task, placeholder } }) => {

  const prevent = e => e.preventDefault()

  return (
    <form onSubmit={prevent}>
      <InputTask
        onChange={handle.change}
        value={task}
        placeholder={placeholder}
      />

      <AddTask onClick={handle.click}>Add</AddTask>
    </form>
  )
}

export { TaskForm }
