import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function PokemonCard({ pokemon, onAdd, onRemove, isInCollection,showAddButton,showDeleteButton }) {
  const typeColors = {
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    grass: 'bg-green-500 text-white',
    electric: 'bg-yellow-400 text-black',
    ice: 'bg-blue-200 text-black',
    fighting: 'bg-red-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-sky-300 text-black',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-lime-500 text-black',
    rock: 'bg-gray-500 text-white',
    ghost: 'bg-indigo-600 text-white',
    dragon: 'bg-indigo-800 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-300 text-black',
    fairy: 'bg-pink-300 text-black',
    normal: 'bg-zinc-400 text-black',
  };

  const hp = pokemon.stats.find(stat => stat.stat.name === 'hp')?.base_stat;
  const attack = pokemon.stats.find(stat => stat.stat.name === 'attack')?.base_stat;
  const defense = pokemon.stats.find(stat => stat.stat.name === 'defense')?.base_stat;

const handleClick = () => {   
  if (isInCollection) {
    onRemove(pokemon.id); 
  } else {
    onAdd(pokemon);
  }
};

  

  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-4 relative flex flex-col items-center gap-2">
      {showDeleteButton && isInCollection && (
        <button
          onClick={() => onRemove?.(pokemon.id)}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center
            text-xs shadow-md hover:bg-red-600 transition"
        >
          <ImCross size={10} />
        </button>
      )}
      {showAddButton && !isInCollection && (
        <button
          onClick={() => onAdd?.(pokemon)}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center
            text-xs shadow-md hover:bg-green-600 transition"
        >
          <FaPlus size={12} />
        </button>
      )}

      <div className="bg-gradient-to-tr from-pink-400 to-purple-400 w-20 h-20 rounded-full flex items-center justify-center">
        <img onClick={handleClick} src={pokemon.sprites.front_default} alt={pokemon.name} className="w-14 h-14" />
      </div>

      <h2 className="font-bold text-lg capitalize">{pokemon.name}</h2>

      <div className="flex flex-wrap gap-2">
        {pokemon.types.map(({ type }) => {
          const colorClass = typeColors[type.name] || 'bg-gray-100 text-black';
          return (
            <span
              key={type.name}
              className={`text-xs font-bold px-2 py-1 rounded-full capitalize ${colorClass}`}
            >
              {type.name}
            </span>
          );
        })}
      </div>

      <div className="flex justify-around w-full text-center mt-2 text-blue-700 font-semibold text-sm">
        <div>
          <p>{hp}</p>
          <p>HP</p>
        </div>
        <div>
          <p>{attack}</p>
          <p>Attack</p>
        </div>
        <div>
          <p>{defense}</p>
          <p>Defense</p>
        </div>
      </div>
    </div>
  );
}