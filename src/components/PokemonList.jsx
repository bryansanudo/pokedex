import React, { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import CardPokemon from "@/components/CardPokemon";
import Loader from "@/components/Loader";

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-5 grid-cols-[repeat(4,1fr)] max-w-[1200px] my-0 mx-auto ">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonList;
