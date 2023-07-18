import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalItem from './AnimalItem';
import AnimalEditModal from './AnimalEditModal';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [editingAnimalId, setEditingAnimalId] = useState(null);

    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchAnimals = () => {
        axios
            .get('http://localhost:8000/animals/')
            .then((response) => {
                setAnimals(response.data);
            })
            .catch((error) => {
                console.error('Error fetching animals:', error);
            });
    };

    const handleDeleteAnimal = (animalId) => {
        axios
            .delete(`http://localhost:8000/animals/${animalId}/`)
            .then(() => {
                fetchAnimals(); // Refresh the animal list after successful deletion
            })
            .catch((error) => {
                console.error('Error deleting animal:', error);
            });
    };

    const handleEditAnimal = (animalId) => {
        setEditingAnimalId(animalId);
    };

    const handleCancelEdit = () => {
        setEditingAnimalId(null);
    };

    const handleModalClose = () => {
        setEditingAnimalId(null);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Animal List</h1>
            <ul className="list-group">
                {animals.map((animal) => (
                    <li key={animal.id} className="list-group-item">
                        <AnimalItem animal={animal} />
                        <div className="btn-group" role="group">
                            <button className="btn btn-primary mx-1" onClick={() => handleEditAnimal(animal.id)}>
                                Edit
                            </button>
                            <button className="btn btn-danger mx-1" onClick={() => handleDeleteAnimal(animal.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {editingAnimalId && (
                <AnimalEditModal
                    animal={animals.find((animal) => animal.id === editingAnimalId)}
                    onSuccess={fetchAnimals}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

export default AnimalList;
