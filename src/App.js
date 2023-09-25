// src/App.js
import React, { useEffect, useState } from 'react';
import BeerList from './components/BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div className="App">
      <h1>Beer Catalog</h1>
      <input
        type="text"
        placeholder="Search for beers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BeerList
        beers={beers.filter((beer) =>
          beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
