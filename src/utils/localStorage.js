export const getCollection = () => {
  const data = localStorage.getItem('collection')
  return data ? JSON.parse(data) : []
}

export const saveCollection = (collection) => {
  localStorage.setItem('collection', JSON.stringify(collection))
}
