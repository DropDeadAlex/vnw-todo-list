import { useState } from "react"

import { Modal } from "../Modal"
import { EditForm, EditInput, ContainerBtn } from './styles'

export const EditTaskForm = ({ task, isOpen, setOpen }) => {

  const [$editInput, setEditInput] = useState(task.name)

  const handle = {
    saveEdit: () => {
      task.name = $editInput
      setOpen(false)
    },

    cancelEdit: () => {
      setEditInput(task.name)
      setOpen(false)
    },

    submit: e => {
      $editInput != ""
        ? handle.saveEdit()
        : e.preventDefault()
    },

    autoSelectText: e => e.target.select(),

    bindEditInput: e => setEditInput(e.target.value)
  }

  return (
    <Modal isOpen={isOpen}>
      <EditForm onSubmit={handle.submit}>
        <h3>Editar Tarefa</h3>

        <EditInput
          placeholder="Editar tarefa..."
          autoFocus
          onFocus={handle.autoSelectText}
          value={$editInput}
          onChange={handle.bindEditInput}
        />

        <ContainerBtn>
          <button type="button" onClick={handle.cancelEdit}>CANCELAR</button>
          <button>OK</button>
        </ContainerBtn>
      </EditForm>
    </Modal>
  )
}
