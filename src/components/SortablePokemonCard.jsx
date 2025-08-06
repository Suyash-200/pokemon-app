// SortablePokemonCard.js
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PokemonCard from './PokemonCard'

export default function SortablePokemonCard({ pokemon,showDeleteButton,showAddButton }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: pokemon.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
       <PokemonCard
        pokemon={pokemon}
        showDeleteButton={showDeleteButton}
        showAddButton={showAddButton}
        dragHandleProps={{...listeners}}
      />
    </div>
  )
}