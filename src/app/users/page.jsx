import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';
import { deleteUser } from '../lib/actions';
import { Button } from '@heroui/react';
import AddUserModal from '../components/AddUserModal';

const UserManagementPage = async() => {

    const users = await getUsers();

    return (
        <div>
            <div className='flex justify-between py-5'>
                User Management {users.length}
                <AddUserModal></AddUserModal>
            </div>



       <UserTable users={users} deleteUserAction={deleteUser}/>
        </div>
    );
};

export default UserManagementPage;