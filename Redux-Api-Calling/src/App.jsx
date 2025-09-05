import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import { fetchTodos } from './redux/todo'

function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.todo)

  console.log("state: ",state)

  if (state.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <button
        onClick={(e) => dispatch(fetchTodos(state))}
      >
        fetch todos
      </button>

      { state.data &&
        state.data.map( data => (
          <li key={data.id}>
            {data.title}
          </li>
        ) )
      }
    </>
  )
}

export default App
