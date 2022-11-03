import { useEffect, useState, createContext } from 'react'
import { getTasks } from '../api/data'

const TasksContext = createContext()

const TasksContextProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([])
  const [filter, setFilter] = useState([])

  const deleteTask = (id) => {
    const arr = [...tasksList]
    const index = arr.findIndex((task) => task.id === id)
    arr.splice(index, 1)
    setTasksList(arr)
    setFilter([])
  }

  const searchTask = (text) =>
    [...tasksList].filter((task) => task.name.includes(text))

  useEffect(() => {
    ;(async () => {
      const allTasks = await getTasks()
      setTasksList(allTasks)
    })()
  }, [])

  const data = {
    tasksList,
    setTasksList,
    deleteTask,
    searchTask,
    filter,
    setFilter,
  }

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>
}

export { TasksContextProvider }
export default TasksContext
