import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import home from '../../../public/home.png'
import TasksContext from '../../context/TasksContext'
const Header = () => {
  const { searchTask, setFilter } = useContext(TasksContext)

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setFilter([])
    } else {
      const filter = searchTask(e.target.value)
      setFilter(filter)
    }
  }

  return (
    <header className="h-20 w-full flex flex-wrap items-center justify-between border-b-2 px-16">
      <nav>
        <ul className="flex align-center justify-between gap-8">
          <li className="shadow-none">
            <NavLink to="/">
              <img src={home} alt="home" className="h-6" />
            </NavLink>
          </li>
          <li className="shadow-none">
            <NavLink to="/form">+ New task</NavLink>
          </li>
        </ul>
      </nav>
      <input
        type="search"
        placeholder="Search task..."
        className="py-1 px-8 border-b-2 border-blue-800 outline-none text-blue-800"
        onChange={(e) => {
          handleSearch(e)
        }}
      />
    </header>
  )
}

export default Header
