import React, { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import CardPokemon from "@/components/CardPokemon";

const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
      <div className="grid gap-5 grid-cols-[repeat(4,1fr)] max-w-[1200px] my-0 mx-auto ">
        {allPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
