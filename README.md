# 🔥 Pokémon Collection App

Discover, collect, and organize your favorite Pokémon with a sleek, modern React application.

---

## 🚀 Features

### 🧭 Discovery Page
- Infinite scrolling powered by **Intersection Observer** and **TanStack Query**
- Displays Pokémon cards with:
  - Image, name, types, stats (HP, Attack, Defense)
  - "+ Add" button to add Pokémon to your collection

### 📦 Personal Collection
- View your personal list of saved Pokémon
- Drag & drop to reorder (using `@dnd-kit`)
- Pokémon are saved in `localStorage` so your collection persists
- Remove any Pokémon with a single click

### 💾 Persistent Storage
- Your collection is stored in `localStorage` and reloaded automatically on refresh

### 📱 Responsive UI
- Works across mobile, tablet, and desktop
- Gradient background and animated loading spinner for visual polish

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Core frontend framework |
| **Tailwind CSS** | Utility-first styling |
| **TanStack Query** | Data fetching with infinite scroll |
| **@dnd-kit** | Modern drag-and-drop for reordering |
| **React Icons** | Icons for add/remove buttons |
| **PokéAPI** | Public API for Pokémon data |

---

## 🔧 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/pokemon-collection-app.git
cd pokemon-collection-app

# 2. Install dependencies
npm install

# If using React 19 and facing peer dependency issues, use:
npm install --legacy-peer-deps

# 3. Start the dev server
npm run dev

📁 Project Structure
src/
├── components/
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── PokemonCard.jsx
│   └── SortablePokemonCard.jsx
├── hooks/
│   └── useInfinitePokemon.js
├── pages/
│   ├── Discover.jsx
│   └── Collection.jsx
├── utils/
│   └── localStorage.js
├── App.jsx
└── main.jsx
