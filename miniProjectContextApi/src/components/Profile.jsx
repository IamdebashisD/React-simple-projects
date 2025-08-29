import React, {useContext} from 'react'
import userContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <h3>please login</h3>
    
    return <div>Welcome {user.username}</div>
}

export default Profile