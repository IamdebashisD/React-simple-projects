
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'
import React from 'react'



function TodoList(props) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const [editingId, setEditingId] = React.useState(null)
    const [editText, setEditText] = React.useState('')

    const handleUpdate = (id, currentText) => {
      setEditingId(id)
      setEditText(currentText)
    };

    const handleSave = (id) => {
      if(editText.trim()){
        dispatch(updateTodo({ id, newText: editText }));
      }
      setEditingId(null)
      setEditText('')
    }

    const handleCancel = () => {
      setEditingId(null)
      setEditText('')
    } 

    const handleKeyPress = (event, id) =>{
      if (event.key === 'Enter'){
        handleSave(id)
      }else if(e.key === 'Escape'){
        handleCancel()
      }
    }


  return (
    <>
    <div className='mb-6 text-center'>
      <h1 className='inline-block pb-2 text-3xl font-bold text-[#cbf4ccd8] border-[#313f31d8]'>
        Todos : <span>{todos.length}</span>
      </h1>

    </div>

    {todos.length === 0 ? 
      (
        <p
          className='w-full p-4 mx-auto text-center text-gray-400 rounded-lg bg-slate-600' 
        > No todo yet , Add one above
        </p>
      ) :
        //todo list
      (
        <ul className='w-full p-4 mx-auto space-y-2 rounded-lg bg-slate-600'>
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className='flex items-center justify-between p-3 text-white transition-colors rounded-md bg-slate-700 hover:bg-slate-800'
            >
              
              { editingId === todo.id ? (
                 <div className='flex items-center flex-1 gap-2'>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, todo.id)}
                      className='flex-1 px-3 py-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      autoFocus
                    />
                    <button
                      onClick={() => handleSave(todo.id)}
                      className='inline-flex px-3 py-1 bg-green-600 rounded-md hover:bg-green-700'
                      title='Save'
                    >
                      <img src={props.saveIcon} alt="save" width={25} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className='inline-flex px-3 py-1 bg-gray-500 rounded-md hover:bg-gray-600'
                      title='Cancel'
                    >
                      <img src={props.cancelIcon} alt="cancel" width={25} />
                    </button>
                  </div>
                ) 
                :
                (
                <>
                  <span className='flex-1 font-medium'>{todo.text}</span>
                  <button 
                      className='px-3 py-1 rounded-md bg-[#2A4D69] hover:bg-[#1E3A5F] absolute'
                      onClick={() => handleUpdate(todo.id, todo.text)}
                      title='Edit'
                    >
                      <img src={props.editIcon} alt="edit" width={25} />
                  </button>

                  <button 
                    className='px-3 py-1 text-sm font-medium text-white transition-colors bg-[#401B1C] hover:bg-[#2E1314] rounded-md'
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    <img src={props.deleteIcon} alt="deleteIcon" width={25}/>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )
    }
    
      

    </>
  )
}

export default TodoList