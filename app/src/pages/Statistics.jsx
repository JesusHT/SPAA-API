import React from 'react';
import Menu from '../components/Menu';

const Statistics = () => {

    return (
        <div className="flex">
            <Menu />
            <div className="flex-grow p-6">
                <h1 className="text-2xl font-bold mb-4">Estadisticas</h1>
            </div>
        </div>
    );
};

export default Statistics;