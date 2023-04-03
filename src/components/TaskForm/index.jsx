import { useContext, useState } from 'react';
import { TaskListContext } from '../../contexts/taskList';

import { TaskForm_ } from './styles';

export const TaskForm = () => {
  const { addTask } = useContext(TaskListContext)
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
