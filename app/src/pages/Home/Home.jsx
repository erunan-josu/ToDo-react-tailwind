import { useContext, useEffect, useState } from 'react'
import TasksContext from '../../context/TasksContext'

import TodoItem from '../../components/TodoItem/TodoItem'

const Home = () => {
  const { tasksList, filter } = useContext(TasksContext)
  const [list, setList] = useState()

  useEffect(() => {
    if (filter.length !== 0) {
      setList(filter)
    } else {
      setList(tasksList)
    }
  }, [tasksList, filter])

  return (
    <section className="home">
      {list ? (
        <ul className="flex flex-col justify-center items-center gap-4 ">
          {list.map((task) => (
            <TodoItem key={task.id} ident={task.id} task={task.name} />
          ))}
        </ul>
      ) : (
        <p>no tasks</p>
      )}
    </section>
  )
}
export default Home
