import React from "react";
import PokeCharasteristics from "./PokeCharasteristics";
import PokeImage from "./PokeImage";
import usePokemon from "../hooks/usePokemon";
import SkeletonCard from "./skeletons/SkeletonCard";

const PokemonCard = ({ pokemon }) => {
  const { pokemonInfo, setPokemonInfo, loading } = usePokemon(pokemon.url);

  return loading ? (
    <SkeletonCard />
  ) : (
    <div className="flex flex-col items-center p-8 bg-back-light rounded-xl border-2 border-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-back-light font-bold rounded-br-xl">
        # {pokemonInfo.id}
      </div>
      <PokeImage sprites={pokemonInfo?.sprites} />
      <h2 className="text-4xl my-4 font-bold">
        {pokemonInfo.name}
      </h2>
      <PokeCharasteristics 
        info={pokemonInfo?.types}
        characteristic="type" 
        className="self-start list-none flex gap-2 flex-wrap"
      />
    </div>
  );
};

export default PokemonCard;
