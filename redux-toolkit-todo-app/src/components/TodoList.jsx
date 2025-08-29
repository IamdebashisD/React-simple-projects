
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'



function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)


  return (
    <>
    <div className='items-center justify-center text-red'>Todos</div>
    <ul className='bg-slate-600'>
    {todos.map((todo) => (
        
            <li key={todo.id}
            >
                {todo.text}
            <button 
            className='text-white bg-red-500'
            onClick={() => (dispatch(removeTodo(todo.id)))}
            > X </button>

            </li>
       
    ))}
     </ul>
    </>
  )
}

export default TodoList