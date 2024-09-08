import React from 'react';
import Menu from '../components/Menu';
import InventoryTable from '../components/tables/Inventory';
import useDashboard from '../hooks/Dashboard';
import AddButton from '../components/buttons/AddButton'; 

const Dashboard = () => {
    const {
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
    } = useDashboard();

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const openModal = () => {
        // Lógica para abrir el modal
    };

    return (
        <div className="flex">
            <Menu />

            <div className="flex-grow p-6">
                {error && <p>Error: {error}</p>}
                <>
                        <h1 className="text-2xl font-bold mb-4">Inventario</h1>

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar por ID, nombre o descripción..."
                            className="mr-2 p-2 border rounded"
                        />

                        <AddButton onClick={openModal} />

                        {paginatedInventoryData.length ? (
                            <>
                                <InventoryTable
                                    inventoryData={paginatedInventoryData}
                                    onView={handleView}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                                {totalPages > 1 && (
                                    <div className="flex justify-between mt-4">
                                        {currentPage > 1 && (
                                            <button
                                                onClick={() => handlePageChange('prev')}
                                                className="px-4 py-2 bg-gray-200 rounded"
                                            >
                                                Anterior
                                            </button>
                                        )}
                                        <span>Página {currentPage} de {totalPages}</span>
                                        {currentPage < totalPages && (
                                            <button
                                                onClick={() => handlePageChange('next')}
                                                className="px-4 py-2 bg-gray-200 rounded"
                                            >
                                                Siguiente
                                            </button>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <p>Loading inventory data...</p>
                        )}
                    </>
            </div>
        </div>
    );
};

export default Dashboard;
