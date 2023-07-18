import React from 'react';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';

function App() {
  return (
    <div className="App">
      <AnimalForm onSuccess={() => window.location.reload()} />
      <AnimalList />
    </div>
  );
}

export default App;
