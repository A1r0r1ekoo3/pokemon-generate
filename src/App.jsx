import "./index.css";
import { useState } from "react";
import { useFetch } from "./components/useFetch";

function App() {
  const pokemonRender = Math.trunc(Math.random() * 100);

  const [id, setId] = useState(pokemonRender);

  function handlPokemon(e) {
    e.preventDefault();
    setId(pokemonRender);
  }

  console.log(pokemonRender);
  const { data, isPending, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  console.log(data);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center absolute">
      <div className="relative z-10 h-screen w-screen flex flex-col justify-center items-center ">
        {isPending && <span className="loading loading-dots loading-lg"></span>}
      </div>
      {data && (
        <div className="w-96 flex flex-col justify-center items-center p-4 shadow-md rounded-lg ">
          <div className="w-full flex items-center justify-end mb-10">
            <div className=" flex items-center gap-3 bg-slate-400 p-2 rounded-md text-white">
              <span>HP</span>
              <h3>{data.id}</h3>
            </div>
          </div>
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            width={250}
            height={250}
          />
          <h1 className="text-4xl font-bold my-4">{data.name}</h1>
          <h4 className="py-1 px-4 rounded-md bg-slate-400 text-white">fire</h4>
          <div className="w-full flex items-center justify-between my-7">
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl font-bold">
                {data.stats[1].base_stat}
              </span>
              <h4 className="text-zinc-600">Attack</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl font-bold">
                {" "}
                {data.stats[2].base_stat}
              </span>
              <h4 className="text-zinc-600">Defence</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl font-bold">
                {" "}
                {data.stats[5].base_stat}
              </span>
              <h4 className="text-zinc-600">Speed</h4>
            </div>
          </div>
          <button
            onClick={handlPokemon}
            className="btn bg-black text-white text-xl font-medium"
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
