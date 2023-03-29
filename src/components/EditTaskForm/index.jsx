import { useState } from "react"

import { Modal } from "../Modal"
import { EditForm, TaskName, ContainerBtn } from './styles'

export const EditTaskForm = ({ task, isOpen, setOpen }) => {
  
  const [$editInput, setEditInput] = useState(task.name)
  
  const bindName = e => setEditInput(e.target.value)
  
  const prevent = e => e.preventDefault()

  const saveEdit = () => {
    task.edit($editInput)
    setOpen(false)
    task.debuga()
  }
  
  const cancelEdit = () => {
    setEditInput(task.name)
    setOpen(false)
    task.debuga()
  }

  const handleKeyPress = e => {
    switch (e.key) {
      case "Enter":
        saveEdit();
        break;
      case "Escape": 
        cancelEdit();
        break;
    } 
  }

  
  return (
    <Modal isOpen={isOpen}>
      <EditForm onSubmit={saveEdit}>
        <h3>Editar Tarefa</h3>
        
        <TaskName 
          placeholder="Editar tarefa..." 
          autoFocus 
          value={$editInput} 
          onChange={bindName}
          onKeyPress={handleKeyPress}
        />

        <ContainerBtn>
          <button onClick={cancelEdit}>CANCELAR</button>
          <button>OK</button>
        </ContainerBtn>
      </EditForm>
    </Modal>
  )
}
