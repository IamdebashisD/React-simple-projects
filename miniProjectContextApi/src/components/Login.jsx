import React, {useState, useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username, password});
    }

  return (
    <div>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'
        required
        />
        {' '}

        <input type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password'
        required
        />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login