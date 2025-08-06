const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <span className="text-white text-sm font-medium">Loading More Pokemon...</span>
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-red-500 border-t-transparent"></div>
    </div>

  )
}

export default Loader
