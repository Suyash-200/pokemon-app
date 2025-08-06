import { Link } from 'react-router-dom'

export default function Navbar({ count }) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/40 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">🔥 Pokemon Collection App</h1>
          <p className="text-sm text-gray-800">
            Discover, collect, and organize your favorite Pokemon!
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          <Link
            to="/"
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
          >
            🔍 Discover Pokemon
          </Link>
          <Link
            to="/collection"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
          >
            📦 My Collection ({count})
          </Link>
        </div>
      </div>
    </div>
  )
}
