import React from 'react';
import Menu from '../components/Menu';

const Users = () => {
    return (
        <div className="flex">
            <Menu  />
            <div className="flex-grow p-6">
                <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
            </div>
        </div>
    );
};

export default Users;
