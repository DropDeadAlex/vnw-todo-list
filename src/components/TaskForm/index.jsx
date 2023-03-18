import { InputTask, AddTask } from './styles';

const TaskForm = ({ config: { inputTask, placeholder, bindState, addTask } }) => {

  const prevent = e => e.preventDefault()

  return (
    <form onSubmit={prevent}>
      <InputTask
        onChange={bindState}
        value={inputTask}
        placeholder={placeholder}
      />

      <AddTask onClick={addTask}>Add</AddTask>
    </form>
  )
}

export { TaskForm }
