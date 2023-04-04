import React, { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import CardPokemon from "@/components/CardPokemon";
import Loader from "@/components/Loader";

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <div className="md:pt-32 pt-40">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-5 md:grid-cols-4 grid-cols-3 max-w-[1200px] w-[330px] sm:w-[500px] md:w-[700px] lg:w-[1000px] my-0  mx-auto">
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
    </div>
  );
};

export default PokemonList;
