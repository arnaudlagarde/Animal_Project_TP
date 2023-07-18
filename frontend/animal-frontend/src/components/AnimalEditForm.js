import React, { useState } from 'react';
import axios from 'axios';

const AnimalEditForm = ({ animal, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: animal.name,
        age: animal.age,
        weight: animal.weight,
        scientificName: animal.scientific_name,
        species: animal.species,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/animals/${animal.id}/`, formData)
            .then(() => {
                onSuccess(); // Refresh the animal list after successful update
            })
            .catch((error) => {
                console.error('Error updating animal:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Edit Animal</h2>
            <form onSubmit={handleSubmit}>
                {/* ... (input fields similar to AnimalCreateForm.js) */}
                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default AnimalEditForm;
