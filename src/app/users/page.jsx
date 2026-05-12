import React from 'react';
import { getUsers } from '../lib/data';

const UserManagementPage = async() => {

    const users = await getUsers();
    console.log(users);
    return (
        <div>
            User Management {users.length}
        </div>
    );
};

export default UserManagementPage;