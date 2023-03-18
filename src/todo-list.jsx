import { Component } from "react";
import { Header, TaskForm, TaskList } from './components'

class ToDoList extends Component {
  state = {
    taskList: [],
    inputTask: "",
    placeholder: "Insira um tarefa..."
  };

  bindState = e => {
    const inputedTask = e.target.value

    this.setState({ inputTask: inputedTask })
  }

  addTask = () => {
    const { taskList, inputTask } = this.state

    if (inputTask != "") {
      const taskId = Math.floor(Math.random() * 10000000)
      const task = this.newTask(inputTask, taskId)

      this.setState({ taskList: [...taskList, task], inputTask: "" })
    }
  }

  deleteTask = ({ id }) => {
    const { taskList } = this.state

    this.setState({
      taskList: taskList.filter(task => task.id != id)
    })
  }

  newTask = (name, id) => ({
    name,
    id,
    delete: () => this.deleteTask({ id })
  })


  render() {
    const { state: { taskList, inputTask, placeholder }, bindState, addTask } = this
    const taskFormConfig = { bindState, addTask, inputTask, placeholder }

    return (
      <>
        <Header></Header>

        <TaskForm config={taskFormConfig} />
        <TaskList tasks={taskList} />
      </>
    )
  }
}

export { ToDoList }