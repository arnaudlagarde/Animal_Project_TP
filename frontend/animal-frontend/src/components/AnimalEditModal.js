import React, { useState } from 'react';
import axios from 'axios';

const AnimalEditModal = ({ animal, onSuccess, onClose }) => {
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
                onClose(); // Close the modal after successful update
            })
            .catch((error) => {
                console.error('Error updating animal:', error);
            });
    };

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Animal</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="weight" className="form-label">
                                    Weight
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="scientificName" className="form-label">
                                    Scientific Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="scientificName"
                                    name="scientificName"
                                    value={formData.scientificName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="species" className="form-label">
                                    Species
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="species"
                                    name="species"
                                    value={formData.species}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalEditModal;
