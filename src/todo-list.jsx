import { Component } from "react";
import { Header, TaskForm, TaskList } from './components'


class ToDoList extends Component {
  state = {
    taskList: [],
    task: "",
    placeholder: "coloque sua tarefa..."
  };

  handle = {
    change: e => {
      const { value: inputedTask } = e.target
      this.setState({ task: inputedTask })
    },
  
    click: () => {
      const { taskList, task } = this.state

      if (task != "") {
        this.setState({
          taskList: [...taskList, task],
          task: ""
        })
      }
    }
  }

  render() {
    const { handle, state: { taskList, task, placeholder } } = this

    // const searchBarConfig = (({ handle }) => ({ handle, task, placeholder }))(this);
    const taskFormConfig = { handle, task, placeholder }

    return (
      <>
        <Header></Header>

        <TaskForm>{taskFormConfig}</TaskForm>
        <TaskList>{taskList}</TaskList>
      </>
    )
  }
}

export { ToDoList }