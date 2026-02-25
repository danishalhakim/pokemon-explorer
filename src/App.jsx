import { useEffect, useState } from "react"

function App() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(10)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetchPokemon()
  }, [limit])

  const fetchPokemon = async () => {
    try {
      setLoading(true)

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      )

      const data = await res.json()

      const details = await Promise.all(
        data.results.map(async (p) => {
          const response = await fetch(p.url)
          return response.json()
        })
      )

      setPokemon(details)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">

      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">
        Pokémon Explorer 🚀
      </h1>

      {/* Search */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-blue-400 p-3 rounded-xl w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-600">
          Loading Pokémon...
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pokemon
          .filter((poke) =>
            poke.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((poke) => (
            <div
              key={poke.id}
              onClick={() => setSelectedPokemon(poke)}
              className="bg-white p-5 rounded-2xl shadow-md hover:scale-105 transition cursor-pointer text-center"
            >
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="mx-auto w-24 h-24"
              />

              <h2 className="capitalize font-semibold mt-2">
                {poke.name}
              </h2>
            </div>
          ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setLimit(limit + 10)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Load More
        </button>
      </div>

      {/* Modal */}
      {selectedPokemon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-2xl w-96 max-h-[80vh] overflow-y-auto">

            <h2 className="text-2xl font-bold capitalize text-center mb-3">
              {selectedPokemon.name}
            </h2>

            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              className="mx-auto mb-4 w-28 h-28"
            />

            {/* Types */}
            <div className="mb-3">
              <h3 className="font-semibold">Types:</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedPokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="bg-blue-200 px-3 py-1 rounded-full text-sm capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Abilities */}
            <div className="mb-3">
              <h3 className="font-semibold">Abilities:</h3>
              <ul className="list-disc ml-5">
                {selectedPokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} className="capitalize">
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mb-3">
              <h3 className="font-semibold">Stats:</h3>
              {selectedPokemon.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <span className="capitalize">
                    {stat.stat.name}:
                  </span>{" "}
                  {stat.base_stat}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedPokemon(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl w-full hover:bg-red-600 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default App