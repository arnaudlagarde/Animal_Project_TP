import React, { useState } from 'react';
import axios from 'axios';

const AnimalForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        weight: '',
        scientificName: '',
        species: '',
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
            .post('http://localhost:8000/animals/', formData)
            .then(() => {
                onSuccess(); // Refresh the animal list after successful addition
                setFormData({
                    name: '',
                    age: '',
                    weight: '',
                    scientificName: '',
                    species: '',
                });
            })
            .catch((error) => {
                console.error('Error adding animal:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Add a New Animal</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age Maximum</label>
                    <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Average Weight</label>
                    <input type="number" step="0.01" className="form-control" name="weight" value={formData.weight} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Scientific Name</label>
                    <input type="text" className="form-control" name="scientificName" value={formData.scientificName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Species</label>
                    <input type="text" className="form-control" name="species" value={formData.species} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Animal
                </button>
            </form>
        </div>
    );
};

export default AnimalForm;
