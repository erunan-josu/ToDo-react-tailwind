import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postTask } from '../../api/data'
import { generateID } from './utils'
import addSvg from '../../../public/addTask.svg'
import InputSubmit from '../../components/InputSubmit'
const Form = () => {
  const navigate = useNavigate()
  const newTask = {
    finished: false,
  }
  const [task, setTask] = useState(newTask)

  useEffect(() => {}, [task])

  return (
    <form
      className="flex flex-wrap justify-center align-center gap-16"
      onSubmit={(e) => {
        e.preventDefault()
        const taskOk = generateID(task)
        postTask(taskOk).then((res) => {
          if (res) {
            navigate('/')
          }
        })
      }}
    >
      <fieldset className="w-3/4 px-10 py-10 flex align-center justify-center flex-col border-2 border-blue-800 gap-8 rounded">
        <legend className={'px-5 text-blue-800 font-bold'}>Add New Task</legend>
        <input
          type="text"
          required
          placeholder="Task Name"
          className="px-2 py-1 border-b-2 border-blue-800 outline-none "
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <InputSubmit val={'Create'} />
      </fieldset>

      <img src={addSvg} alt="add task" className="w-2/4" />
    </form>
  )
}

export default Form
