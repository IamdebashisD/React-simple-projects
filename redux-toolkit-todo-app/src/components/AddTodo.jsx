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
    <div className='justify-between item-center'>
      <form onSubmit={addTodoHandle}>
        <input 
        type="text"
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button type='submit' 
        className='text-white bg-red-500 '
        >Add</button>
      </form>
    </div>
  )
}

export default AddTodo