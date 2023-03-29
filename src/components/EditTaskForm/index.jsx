import { useState } from "react"

import { Modal } from "../Modal"
import { EditForm, TaskName, ContainerBtn } from './styles'

export const EditTaskForm = ({ task, isOpen }) => {
  
  const [taskName, setTaskName] = useState(task.name)
  
  const prevent = e => e.preventDefault()

  const bindName = e => setTaskName(e.target.value)
  
  return (
    <Modal isOpen={isOpen}>
      <EditForm onSubmit={prevent}>
        <h3>Editar Tarefa</h3>
        
        <TaskName 
          placeholder="Editar tarefa..." autoFocus 
          value={taskName} onChange={bindName}
        />

        <ContainerBtn>
          <button onClick={task.closeEditForm}>CANCELAR</button>
          <button>OK</button>
        </ContainerBtn>
      </EditForm>
    </Modal>
  )
}
