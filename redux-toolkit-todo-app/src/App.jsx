import { useState } from 'react'
import './App.css'
import xBlueMark from './assets/xBlueMark.png'
import AddTodo from './components/AddTodo'
import TodoList from './components/todoList'
import edit from './assets/edit.png'
import todolist from './assets/to-do-list.png'
import saveicon from './assets/saveicon.png'
import cancle from './assets/cancle.png'
import visible from './assets/visible.png'
import invisible from './assets/invisible.png'
import checked from './assets/checked.png'
import unchecked from './assets/unchecked.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex items-center min-w-full gap-2 p-5 font-semibolds bg-slate-700 '>
        <img src={todolist} alt="taskicon" width={50} />
        <h1 className='text-[#cbf4ccd8]'>Todo list</h1>
      </header>
      <main className=' bg-slate-600'>
        <AddTodo/>
        <TodoList 
          deleteIcon={xBlueMark}
          editIcon={edit}
          saveIcon={saveicon}
          cancelIcon={cancle}

          visible={visible}
          invisible={invisible}

          checked = {checked}
          unchecked = {unchecked}
        />
      </main>
    </>
  )
}

export default App
