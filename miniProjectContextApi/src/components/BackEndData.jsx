import React , {useContext} from 'react'
import userContext from '../context/UserContext'


function BackEndData() {
    const {flaskUser} = useContext(userContext)

    if (!Array.isArray(flaskUser)) {
        return <div>Loading users...</div>; // or handle error
    }
  return (
    <div>
        <ul>
            {flaskUser.map((user)=> (
                <li key={user.email}>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BackEndData