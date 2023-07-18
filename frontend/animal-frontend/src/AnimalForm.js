import React, { useState } from 'react';
import axios from 'axios';

const AnimalForm = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [species, setSpecies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnimal = {
            name,
            age_maximum: parseInt(age),
            average_weight: parseFloat(weight),
            scientific_name: scientificName,
            species,
        };

        axios
            .post('http://localhost:8000/animals/', newAnimal)
            .then(() => {
                onSuccess(); // Refresh the animal list after successful addition
                setName('');
                setAge('');
                setWeight('');
                setScientificName('');
                setSpecies('');
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
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age Maximum</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Average Weight</label>
                    <input type="number" step="0.01" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Scientific Name</label>
                    <input type="text" className="form-control" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Species</label>
                    <input type="text" className="form-control" value={species} onChange={(e) => setSpecies(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Animal
                </button>
            </form>
        </div>
    );
};

export default AnimalForm;
