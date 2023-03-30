import { Component } from "react";
import { Header, TaskForm, TaskList } from './components'

class ToDoList extends Component {
  state = {
    taskList: [],
  };

  addTask = (name) => {
    const { taskList } = this.state

    this.setState({
      taskList: [...taskList, this.newTask(name)],
    })
  };

  removeTask = ({ id }) => {
    const { taskList } = this.state

    this.setState({
      taskList: taskList.filter(task => task.id != id)
    })
  };

  newTask = (name, id = this.genId()) => ({
    id,
    name,
    done: false,
    delete: () => this.removeTask({ id }),
    // debug: () => console.log(this.state.taskList)
  });

  genId = () => Math.floor(10000000 * Math.random());


  render = () => {
    const { state: { taskList }, addTask } = this

    return (
      <>
        <Header>Lista de Tarefas</Header>

        <main>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskList} />
        </main>
      </>
    )
  };
}

export { ToDoList }
