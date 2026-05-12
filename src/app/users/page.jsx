import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';

const UserManagementPage = async() => {

    const users = await getUsers();
    console.log(users);
    return (
        <div>
            User Management {users.length}

       <UserTable users={users}/>
        </div>
    );
};

export default UserManagementPage;