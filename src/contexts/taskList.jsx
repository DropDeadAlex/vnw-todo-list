import { createContext, useState } from "react";

export const TaskListContext = createContext()

export const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])

  const addTask = task => (
    setTaskList([...taskList, task])
  );

  const removeTask = ({ id }) => (
    setTaskList(taskList.filter(task => task.id != id))
  );

  const newTask = (name, id = genId()) => ({
    id,
    name,
    done: false,
    delete: () => removeTask({ id }),
    debug: () => console.log(taskList)
  });

  const genId = () => Math.floor(1e9 * Math.random());

  return (
    <TaskListContext.Provider value={{ taskList, addTask, removeTask, newTask }}>
      {children}
    </TaskListContext.Provider>
  )
}