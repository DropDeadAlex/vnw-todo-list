import { useState } from "react"

import { Modal } from "../Modal"
import { EditForm, TaskName, ContainerBtn } from './styles'

export const EditTaskForm = ({ task, isOpen, setOpen }) => {

  const [$editInput, setEditInput] = useState(task.name)

  const bindName = e => setEditInput(e.target.value)

  const saveEdit = () => {
    task.name = $editInput
    setOpen(false)
  }

  const cancelEdit = () => {
    setEditInput(task.name)
    setOpen(false)
  }


  return (
    <Modal isOpen={isOpen}>
      <EditForm onSubmit={saveEdit}>
        <h3>Editar Tarefa</h3>

        <TaskName
          placeholder="Editar tarefa..."
          autoFocus
          onFocus={e => e.target.select()}
          value={$editInput}
          onChange={bindName}
        />

        <ContainerBtn>
          <button type="button" onClick={cancelEdit}>CANCELAR</button>
          <button>OK</button>
        </ContainerBtn>
      </EditForm>
    </Modal>
  )
}
