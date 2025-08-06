import { useEffect, useRef } from 'react';
import { useInfinitePokemon } from '../hooks/useInfinitePokemon';
import PokemonCard from '../components/PokemonCard';
import Loader from '../components/Loader';

export default function Discover({ collection, addToCollection, removeFromCollection }) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePokemon();
  const loader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    }, { threshold: 1 });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.pages.map(page =>
          page.results.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onAdd={addToCollection}
              onRemove={removeFromCollection}
              isInCollection={collection.some(p => p.id === pokemon.id)}
              showDeleteButton={true} 
              showAddButton={true}  
            />
          ))
        )}
      </div>
      <div ref={loader} className="text-center text-white mt-6">
        {isFetchingNextPage && <Loader/>}
      </div>
    </div>
  );
}