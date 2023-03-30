import { useState } from "react"

import { Modal } from "../Modal"
import { EditForm, ContainerBtn } from './styles'

export const EditTaskForm = ({ task, isOpen, setOpen }) => {

  const [$editInput, setEditInput] = useState(task.name)

  const saveEdit = () => {
    task.name = $editInput
    setOpen(false)
  }

  const cancelEdit = () => {
    setEditInput(task.name)
    setOpen(false)
  }

  const handleSubmit = e => {
    $editInput != ""
      ? saveEdit()
      : e.preventDefault()
  }

  const autoSelectText = e => e.target.select()

  const bindEditInput = e => setEditInput(e.target.value)

  return (
    <Modal isOpen={isOpen}>
      <EditForm onSubmit={handleSubmit}>
        <h3>Editar Tarefa</h3>

        <input
          placeholder="Editar tarefa..."
          autoFocus
          onFocus={autoSelectText}
          value={$editInput}
          onChange={bindEditInput}
        />

        <ContainerBtn>
          <button type="button" onClick={cancelEdit}>CANCELAR</button>
          <button>OK</button>
        </ContainerBtn>
      </EditForm>
    </Modal>
  )
}
