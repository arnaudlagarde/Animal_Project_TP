import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimalItem from './AnimalItem';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

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

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Animal List</h1>
            <ul className="list-group">
                {animals.map((animal) => (
                    <AnimalItem key={animal.id} animal={animal} />
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
