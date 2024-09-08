import { useState, useEffect } from 'react';
import { URL_INVETORY } from '../config/routes';

const useDashboard = () => {
    const [error, setError] = useState(null);
    const [inventoryData, setInventoryData] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchInventoryData = async () => {
            try {
                const response = await fetch(URL_INVETORY, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) throw new Error('Failed to fetch inventory data');

                const data = await response.json();
                setInventoryData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchInventoryData();
    }, []);

    const handleView = (id) => {
        // Implement view functionality
        alert(`View details for item ${id}`);
    };

    const handleEdit = (id) => {
        // Implement edit functionality
        alert(`Edit item ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
        alert(`Delete item ${id}`);
    };

    const filteredInventoryData = inventoryData
        ? inventoryData.body.filter(item => 
            item.id_inventory.toString().includes(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const paginatedInventoryData = filteredInventoryData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredInventoryData.length / itemsPerPage);

    return {
        error,
        paginatedInventoryData,
        handleView,
        handleEdit,
        handleDelete,
        currentPage,
        setCurrentPage,
        totalPages,
        searchTerm,
        setSearchTerm
    };
};

export default useDashboard;