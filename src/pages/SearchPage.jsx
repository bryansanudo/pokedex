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
    <div className="max-w-[1200px] my-0 mx-auto md:pt-32 pt-40">
      <p className="mb-[30px] text-[22px] text-center">
        se encontraron{" "}
        <span className="font-bold">{filteredPokemons.length}</span> resultados:
      </p>
      <div className="grid gap-5 md:grid-cols-4 grid-cols-3 max-w-[1200px] w-[330px] sm:w-[500px] md:w-[700px] lg:w-[1000px] my-0  mx-auto mb-20">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
