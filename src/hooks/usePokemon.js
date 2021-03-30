import React, { useState, useEffect } from "react";

const usePokemon = (url) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPokemonInfo(data);
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }, 0);
  }, [url]);

  return {
    pokemonInfo,
    setPokemonInfo,
    loading,
  };
};

export default usePokemon;
