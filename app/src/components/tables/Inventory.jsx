import React from 'react';

const InventoryTable = ({ inventoryData, onView, onEdit, onDelete }) => {
    if (!inventoryData) return null;

    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
                <tr className="bg-gray-100 border-b">
                    <th className="py-3 px-6 text-left text-gray-600">ID</th>
                    <th className="py-3 px-6 text-left text-gray-600">Nombre</th>
                    <th className="py-3 px-6 text-left text-gray-600">Marca</th>
                    <th className="py-3 px-6 text-left text-gray-600">Modelo</th>
                    <th className="py-3 px-6 text-left text-gray-600">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {inventoryData.map((item) => (
                    <tr key={item.id_inventory} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-6">{item.id_inventory}</td>
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6">{item.quantity}</td>
                        <td className="py-3 px-6">{item.description}</td>
                        <td className="py-3 px-6 flex space-x-2">
                            <button
                                onClick={() => onView(item.id_inventory)}
                                className="text-blue-500 hover:text-blue-700 btn"
                            >
                                View
                            </button>
                            <button
                                onClick={() => onEdit(item.id_inventory)}
                                className="text-yellow-500 hover:text-yellow-700"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(item.id_inventory)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InventoryTable;