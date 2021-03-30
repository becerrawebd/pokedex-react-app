import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import ReactPaginate from "react-paginate"
import Pagination from "../components/Pagination";

const POKEMON_LIST_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 20;

const Home = () => {
  const { page } = useParams();
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0)

  useEffect(() => {
    fetch(
      `${POKEMON_LIST_URL}?offset=${
        page === '1' ? 0 : page*20
      }&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemonCount(data.count)
        setPokemonList(data.results);
      });
  }, [page]);

  return (
    <div className="w-9/12 flex flex-col m-auto gap-y-8 min-h-screen">
      <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination 
        pokemonCount={pokemonCount}
        page={page}
      />
    </div>
  );
};

export default Home;
