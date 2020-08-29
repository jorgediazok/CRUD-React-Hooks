import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Tanya', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Ekaterina', username: 'kateleta' },
    { id: uuidv4(), name: 'Aleksandr', username: 'sasha25' },
  ];

  //State
  const [users, setUsers] = useState(usersData);

  //Add Users

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Delete Users

  const deleteUser = (id) => {
    const filteredArray = users.filter((user) => user.id !== id);
    setUsers(filteredArray);
  };

  //Edit Users
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(true);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
