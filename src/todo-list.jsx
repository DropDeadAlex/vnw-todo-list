import { Component } from "react";
import { Header, TaskForm, TaskList } from './components'

class ToDoList extends Component {
  state = {
    taskList: [],
    inputTask: "",
    placeholder: "Insira um tarefa..."
  };

  bindState = e => {
    const $inputedTask = e.target.value

    this.setState({ inputTask: $inputedTask })
  };

  addTask = () => {
    const { inputTask, taskList } = this.state

    if (inputTask != "")
      this.setState({
        taskList: [...taskList, this.newTask()],
        inputTask: ""
      })
  };

  deleteTask = ({ id }) => {
    const { taskList } = this.state

    this.setState({
      taskList: taskList.filter(task => task.id != id)
    })
  };

  toggleTaskDone = ({ id }) => {
    const { taskList } = this.state

    const updatedTaskList = taskList.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    )

    this.setState({ taskList: updatedTaskList})
  }

  newTask = (id = this.genId(), name = this.state.inputTask) => ({
    id,
    name,
    done: false,
    delete: () => this.deleteTask({ id }),
    toggleDone: () => this.toggleTaskDone({ id })
  });

  genId = () => Math.floor(10000000 * Math.random());


  render = () => {
    const { state: { taskList, inputTask, placeholder }, bindState, addTask } = this
    const taskFormConfig = { inputTask, placeholder, bindState, addTask }

    return (
      <>
        <Header></Header>

        <main>
          <TaskForm config={taskFormConfig} />
          <TaskList tasks={taskList} />
        </main>
      </>
    )
  };
}

export { ToDoList }
