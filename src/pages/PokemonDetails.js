import React from "react";
import { useParams } from "react-router-dom";
import PokeImage from "../components/PokeImage";
import PokeCharasteristics from "../components/PokeCharasteristics";
import usePokemon from "../hooks/usePokemon";
import CharacteristicList from "../components/CharacteristicList"

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonDetails = () => {
  const { id } = useParams();
  const { pokemonInfo, setPokemonInfo, loading } = usePokemon(`${url}/${id}`);

  console.log(pokemonInfo);

  return (
    <div className="w-9/12 md:w-11/12 m-auto flex flex-col gap-x-4 gap-y-8 md:flex-row">
      <div className="flex flex-col md:flex-1 shadow-md p-4 bg-back-light rounded-md relative overflow-hidden">
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-4xl text-back-light font-bold bg-red-500 w-full text-center absolute top-0 left-0">{pokemonInfo.name}</h1>
          <PokeImage sprites={pokemonInfo?.sprites} />
        </div>
        <div className="characteristics px-2 py-4 border-b border-red-500">
          <h2 className="text-xl font-bold leading-10">Characteristics</h2>
          <p>
            Height: <span>{pokemonInfo.height} Ft</span>
          </p>
          <p>
            Weight: <span>{pokemonInfo.weight} Lbs</span>
          </p>
        </div>
        <div className="types px-2 py-4 border-b border-red-500">
          <h2 className="text-xl font-bold leading-10">Type</h2>
          <CharacteristicList 
            className="list-none flex flex-wrap items-start gap-2"
            info={pokemonInfo.types}
            chars={{
              type: { name },
              slot
            }}
          />
        </div>
        <div className="abilities px-2 py-4 border-b border-red-500">
          <h2 className="text-xl font-bold leading-10">Abilities</h2>
          <PokeCharasteristics
            info={pokemonInfo.abilities}
            characteristic="ability"
            className="list-none flex flex-wrap items-start gap-2"
            liClassName="px-4 py-1 border border-red-500 text-red-500 rounded font-bold"
          />
        </div>
        <div className="stats px-2 py-4 border-b border-red-500">
          <h2 className="text-xl font-bold leading-10">Stats</h2>
          <PokeCharasteristics
            info={pokemonInfo.stats}
            characteristic="stat"
            className="list-none flex flex-wrap items-start gap-2"
            liClassName="px-4 py-1 rounded text-red-500 font-bold"
          />
        </div>
      </div>
      <div className="md:flex-1 md:flex-shrink-0 shadow-md p-4 bg-back-light rounded-md">
        <h2 className="text-xl font-bold leading-10">Moves</h2>
        <PokeCharasteristics
          info={pokemonInfo.moves}
          characteristic="move"
          className="flex flex-wrap items-start gap-2"
          liClassName="bg-gray-800 text-back-light px-2 rounded "
        />
      </div>
    </div>
  );
};

export default PokemonDetails;
