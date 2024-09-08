import React from 'react';

const AddButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Agregar
        </button>
    );
};

export default AddButton;
