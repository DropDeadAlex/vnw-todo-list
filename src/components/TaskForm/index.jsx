import { Input, Button } from './styles';

const TaskForm = ({ children: { handle, task, placeholder } }) => {

  const prevent = e => e.preventDefault()

  return (
    <form onSubmit={prevent}>
      <Input
        onChange={handle.change}
        value={task}
        placeholder={placeholder}
      />

      <Button onClick={handle.click}>Add</Button>
    </form>
  )
}

export { TaskForm }
