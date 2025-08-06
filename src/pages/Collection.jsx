// Collection.js
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import SortablePokemonCard from '../components/SortablePokemonCard'

export default function Collection({ collection, setCollection }) {
  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = collection.findIndex(p => p.id === active.id)
    const newIndex = collection.findIndex(p => p.id === over.id)
    const updated = arrayMove(collection, oldIndex, newIndex)
    setCollection(updated)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 My Collection</h1>

      {collection.length === 0 ? (
        <div className="text-center text-gray-400 mt-12 text-lg">
          No Pokemon in your collection yet. Go catch some!
        </div>
      ) : (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={collection.map(p => p.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collection.map((pokemon) => (
                <SortablePokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  showDeleteButton={false} 
                  showAddButton={false} 
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  )
}