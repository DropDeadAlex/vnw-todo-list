import { useContext, useState } from 'react';
import { TaskListContext } from '../../contexts/taskList';

import { TaskForm_ } from './styles';

export const TaskForm = () => {
  const { addTask, newTask } = useContext(TaskListContext)

  const [$inputTask, setInputTask] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if ($inputTask != "") {
      const task = newTask($inputTask);

      addTask(task)
      setInputTask("")
    }
  }

  const bindInputTask = e => setInputTask(e.target.value)


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
