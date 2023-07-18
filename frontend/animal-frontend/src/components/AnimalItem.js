import React from 'react';

const AnimalItem = ({ animal }) => {
    return (
        <li className="list-group-item">
            <strong>{animal.name}</strong> - {animal.species.name} (Scientific Name: {animal.scientific_name})
        </li>
    );
};

export default AnimalItem;
