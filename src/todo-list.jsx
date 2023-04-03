import { Component } from "react";
import { TaskListProvider } from "./contexts/taskList";

import { Header, TaskForm, TaskList } from './components'
class ToDoList extends Component {
  render = () => {
    return (
      <>
        <Header>Lista de Tarefas</Header>

        <main>
          <TaskListProvider>
            <TaskForm />
            <TaskList />
          </TaskListProvider>
        </main>
      </>
    )
  };
}

export { ToDoList }
