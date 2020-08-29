import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
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

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
