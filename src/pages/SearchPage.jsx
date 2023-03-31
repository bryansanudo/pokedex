import React, { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import { useLocation } from "react-router-dom";

import CardPokemon from "@/components/CardPokemon";

const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] my-0 mx-auto">
      <p className="mb-[30px] text-[22px] ">
        se encontraron{" "}
        <span className="font-bold">{filteredPokemons.length}</span> resultados:
      </p>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[20px] max-w-[1200px] my-0 mx-auto">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
