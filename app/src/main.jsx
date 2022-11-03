import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import { TasksContextProvider } from './context/TasksContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <TasksContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </TasksContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
