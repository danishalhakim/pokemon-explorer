# Pokémon Explorer 🚀

## Project Description
A responsive web application built with React, Vite, and Tailwind CSS.
It fetches data from the public PokéAPI and allows users to explore Pokémon information.

---

## Features Implemented

- Display at least 10 Pokémon with name and image
- Search Pokémon by name
- Load more Pokémon dynamically
- Click on a Pokémon to view detailed information:
  - Types
  - Abilities
  - Stats
- Responsive design for mobile and desktop
- Clean UI using Tailwind CSS

---

## Design and Technical Decisions

This project was built using React with Vite for fast development and optimized build performance. Vite was chosen because it provides a lightweight setup and faster hot module replacement compared to traditional React setups.

Tailwind CSS was used for styling to ensure a clean, responsive, and modern user interface. It allows rapid UI development using utility classes without writing custom CSS files.

The application fetches data from the public PokéAPI using asynchronous JavaScript (fetch API). Data is handled using React state management (useState and useEffect) to dynamically update the UI when new Pokémon are loaded or searched.

The "Load More" functionality was implemented to improve performance by limiting the number of Pokémon displayed at once instead of loading all data immediately.

Component-based architecture was used to improve code organization, readability, and reusability. Each major feature (Pokémon card, search bar, detail modal) is separated into its own component.

Responsive design principles were applied to ensure the application works well on both desktop and mobile devices.

---

## How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/danishalhakim/pokemon-explorer.git
```

### 2. Navigate into the project folder
```bash
cd pokemon-explorer
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

### 5. Open in your browser
```bash
After running the development server, open the local URL shown in the terminal (usually): http://localhost:5173
```