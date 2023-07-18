import React from 'react';
import './App.css';
import AnimalList from './components/AnimalList';
import AnimalCreateForm from './components/AnimalCreateForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const handleAnimalCreateSuccess = () => {
    // Function to refresh the animal list after successful addition
    // Implement this function if needed.
    // For example, you can call fetchAnimals() in AnimalList component to update the list.
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Animal List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Add Animal
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/create" element={<AnimalCreateForm onSuccess={handleAnimalCreateSuccess} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
