// App.js
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Discover from './pages/Discover'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import { getCollection, saveCollection } from './utils/localStorage'

export default function App() {
  const [collection, setCollection] = useState(() => getCollection());

  useEffect(() => {
    saveCollection(collection);
  }, [collection]);

  const addToCollection = (pokemon) => {
    if (collection.some(p => p.id === pokemon.id)) return;
    setCollection(prev => [...prev, pokemon]);
  };

  const removeFromCollection = (pokemonId) => {
    setCollection(prev => prev.filter(p => p.id !== pokemonId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 text-black">
      <BrowserRouter>
        <Navbar count={collection.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Discover
                collection={collection}
                addToCollection={addToCollection}
                removeFromCollection={removeFromCollection}
              />
            }
          />
          <Route
            path="/collection"
            element={
              <Collection
                collection={collection}
                setCollection={setCollection}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}