import React, {useEffect} from 'react'
import userContext from './UserContext'

function UserContextProvider({children}) {
    const [user, setUser] = React.useState(null)
    const [flaskUser, setFlaskUser] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/users/get_users");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setFlaskUser(data.data || []); // Assuming your API returns { data: [...] }
            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


  return (
    <userContext.Provider value={{
     user, setUser,
     flaskUser, setFlaskUser, 
     loading, setLoading, 
     error, setError
     }}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider