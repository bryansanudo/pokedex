import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="cursor-pointer bg-[#f2f2f2] no-underline shadow-lg shadow-gray-600 hover:scale-105 duration-300 rounded-xl"
    >
      <div className="bg-[#f2f2f2]  flex items-center justify-center rounded-[5px] h-[80px] sm:h-[150px] md:h-[200px] lg:h-[250px]  ">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
          className="w-full h-full"
        />
      </div>
      <div className="text-center">
        <span className="block text-[#888]">N° {pokemon.id}</span>
        <h3 className="text-[#333] capitalize font-bold">{pokemon.name}</h3>
        <div className="flex flex-col ">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`${type.type.name} py-1 text-center mx-3 mb-2  rounded-[5px] text-[#fff]`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
