import { InputTask, AddTask, TaskForm_ } from './styles';

const TaskForm = ({ config: { inputTask, placeholder, bindState, addTask } }) => {

  const prevent = e => e.preventDefault()

  return (
    <TaskForm_ onSubmit={prevent}>
      <InputTask
        value={inputTask}
        placeholder={placeholder}
        onChange={bindState}
      />

      <AddTask onClick={addTask}>Add</AddTask>
    </TaskForm_>
  )
}

export { TaskForm }
