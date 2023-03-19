import { InputTask, AddTask } from './styles';

const TaskForm = ({ config: { inputTask, placeholder, bindState, addTask } }) => {

  const prevent = e => e.preventDefault()

  return (
    <form onSubmit={prevent}>
      <InputTask
        value={inputTask}
        placeholder={placeholder}
        onChange={bindState}
      />

      <AddTask onClick={addTask}>Add</AddTask>
    </form>
  )
}

export { TaskForm }
