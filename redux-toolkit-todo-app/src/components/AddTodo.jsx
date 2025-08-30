import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandle = (event) => {
    event.preventDefault()
    
    if(input.trim()){
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div className='flex items-center justify-center w-full p-4 px-3 mx-auto mb-6'>
      <form onSubmit={addTodoHandle} className='flex w-full max-w-2xl gap-2 m-4'>
        <input 
          type="text"
          placeholder='Enter a Todo...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='flex-1 min-w-0 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
        />

        <button type='submit' 
         className='px-6 py-3 text-white bg-[#401B1C] hover:bg-[#2E1314] rounded-lg font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-4'
        >Add</button>
      </form>
    </div>
  )
}

export default AddTodo