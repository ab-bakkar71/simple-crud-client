import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async({params}) => {

    const {userId}= await params;
    const user = await getUserById(userId);
    
    return (
        <div>
            <h2>User Details</h2>
            <h1>Name: {user.name}</h1>
        </div>
    );
};

export default UserDetailsPage;