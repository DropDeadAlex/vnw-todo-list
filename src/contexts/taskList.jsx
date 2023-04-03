import { createContext, useState } from "react";

export const TaskListContext = createContext()

export const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])

  const addTask = name => {
    setTaskList([...taskList, newTask(name)])
  };

  const removeTask = ({ id }) => {
    console.log(`reciveid id: ${id}: `);
    console.log(`TaskList before filter:`, taskList);

    const updatedTaskList = taskList.filter(task => task.id != id)

    console.log("tasklist after filter:", updatedTaskList);

    // setTaskList(taskList.filter(task => {
    //   console.log(task.id, id, task.id != id);
    //   return task.id !== id
    // }))
  };

  const newTask = (name, id = genId()) => ({
    id,
    name,
    done: false,
    delete: () => removeTask({ id }),
    // debug: () => console.log(taskList)
  });

  const genId = () => Math.floor(1e9 * Math.random());

  return (
    <TaskListContext.Provider value={{ taskList, addTask, removeTask }}>
      {children}
    </TaskListContext.Provider>
  )
}