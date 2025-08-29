import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Error from './Error';

function GetUsers() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total_user, setTotalUser] = useState(0);
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc'
    });

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/users/get_users');
            const userData = Array.isArray(response.data.data) ? response.data.data : [];
            setUsers(userData);
            setFilteredUsers(userData);
            setTotalUser(typeof response.data.total_user === 'number' ? response.data.total_user : 0);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch data');
            setUsers([]);
            setFilteredUsers([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleUserAdded = useCallback((newUser) => {
        setUsers(prev => [newUser, ...prev]);
        setFilteredUsers(prev => [newUser, ...prev]);
        setTotalUser(prev => prev + 1);
    }, []);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortUsers = () => {
        if (!sortConfig.key) return;

        const sortedUsers = [...filteredUsers].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setFilteredUsers(sortedUsers);
    };

    const filterByName = (searchTerm) => {
        if (!searchTerm) {
            setFilteredUsers(users);
            return;
        }
        const filtered = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    useEffect(() => {
        sortUsers();
    }, [sortConfig]);

    if (loading) return <div className='p-4 text-center text-white'>Loading...</div>;
    if (error) return <Error />;
    if (users.length === 0) return <div className='p-4 text-white'>No users found</div>;

    return (
        <div className="justify-center p-4">
            <h2 className="mb-4 text-xl font-bold text-white">User List</h2>
            <h3 className='text-white'>Total user: {total_user}</h3>
            
            {/* Add User Component */}
            {/* <AddUser OnUserAdded={handleUserAdded} /> */}
            
            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 my-4">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        onChange={(e) => filterByName(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
                
                <div className="flex gap-2">
                    <button
                        onClick={() => requestSort('name')}
                        className={`px-4 py-2 rounded ${
                            sortConfig.key === 'name' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    >
                        Sort by Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                    </button>
                    
                    <button
                        onClick={() => requestSort('createdAt')}
                        className={`px-4 py-2 rounded ${
                            sortConfig.key === 'createdAt' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    >
                        Sort by Date {sortConfig.key === 'createdAt' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                    </button>
                </div>
            </div>
            
            {/* User List */}
            <ul className="space-y-2">
                {filteredUsers.map((user) => (
                    <li key={user.email} className="p-3 text-blue-800 border rounded-lg hover:bg-gray-500">
                        <div className="flex-auto font-medium text-center">{user.name}</div>
                        <div className="flex-auto text-center text-black">{user.email}</div>
                        {user.createdAt && (
                            <div className="text-sm text-center text-gray-600">
                                Joined: {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetUsers;