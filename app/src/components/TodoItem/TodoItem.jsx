import './TodoItem.css'
import TasksContext from '../../context/TasksContext'
import { handleCheck } from './utils'
import InputCheck from '../InputCheck'
import Label from '../Label'
import bin from '../../../public/bin.png'
import Image from '../Image'
import { useContext } from 'react'

const TodoItem = ({ ident, task }) => {
  const { deleteTask } = useContext(TasksContext)

  return (
    <li className=" todo-item opacity-80 w-3/4 max-w-lg flex justify-between px-4 py-2 text-blue-800 rounded ">
      <div>
        <InputCheck ident={ident} eventHandler={handleCheck} />
        <Label ident={ident} text={task} />
      </div>
      <Image
        img={bin}
        descrip={'bin'}
        eventHandler={deleteTask}
        ident={ident}
      />
    </li>
  )
}
export default TodoItem
