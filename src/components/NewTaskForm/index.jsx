import { useState } from 'react';

import { NewTaskForm_ } from './styles';

export const NewTaskForm = ({ addTask }) => {
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
    <NewTaskForm_ onSubmit={handleSubmit}>
      <input
        value={$inputTask}
        placeholder="Insira um tarefa..."
        onChange={bindInputTask}
      />

      <button>Add</button>
    </NewTaskForm_>
  )
}
