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

    if (inputTask != "")
      this.setState({
        taskList: [...taskList, this.newTask()],
        inputTask: ""
      })
  }

  deleteTask = ({ id }) => {
    const { taskList } = this.state

    this.setState({
      taskList: taskList.filter(task => task.id != id)
    })
  }

  newTask = (name = this.state.inputTask, id = this.genId()) => ({
    name,
    id,
    delete: () => this.deleteTask({ id })
  })

  genId = () => Math.floor(Math.random() * 10000000)


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