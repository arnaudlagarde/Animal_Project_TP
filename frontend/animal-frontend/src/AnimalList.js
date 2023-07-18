import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/animals/')
            .then(response => {
                setAnimals(response.data);
            })
            .catch(error => {
                console.error('Error fetching animals:', error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Animal List</h1>
            <ul className="list-group">
                {animals.map(animal => (
                    <li key={animal.id} className="list-group-item">
                        <strong>{animal.name}</strong> - {animal.species.name} (Scientific Name: {animal.scientific_name})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
