import { useState } from 'react';

import { TaskForm_ } from './styles';

const TaskForm = ({ addTask }) => {
  const [$inputTask, setInputTask] = useState("")
  
  const bindInputTask = e => setInputTask(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    if($inputTask != ""){
      setInputTask("")
      addTask($inputTask)
    }
  }


  return (
    <TaskForm_ onSubmit={handleSubmit}>
      <input
        value={$inputTask}
        placeholder="Insira um tarefa..."
        onChange={bindInputTask}
      />

      <button>Add</button>
    </TaskForm_>
  )
}

export { TaskForm }
