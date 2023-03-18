import { Component } from "react";
import { Header, TaskForm, TaskList } from './components'

class ToDoList extends Component {
  state = {
    taskList: [],
    inputTask: "",
    // task: {
    //   name: "",
    //   id: 0,
    //   delete: () => { },
    // },
    placeholder: "Insira um tarefa..."
  };

  bindState = e => {
    const inputedTask = e.target.value

    this.setState({ inputTask: inputedTask })
  }

  addTask = () => {
    const { taskList, inputTask: name } = this.state
    
    const task = {
      name,
      id: Math.floor(Math.random() * 10000000),
      delete: () => this.deleteTask(task)
    }

    if (task.name != "")
      this.setState({ taskList: [...taskList, task], inputTask: "" })
  }

  deleteTask = ({ id }) => {
    const { taskList } = this.state

    this.setState({
      taskList: taskList.filter(task => task.id != id)
    })
  }

  newTask = () => this.setState({ 
    task: { name: "", id: 0, delete: () => { } } 
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