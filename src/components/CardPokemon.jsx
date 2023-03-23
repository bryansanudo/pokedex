import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="cursor-pointer  no-underline "
    >
      <div className="bg-[#f2f2f2] flex items-center justify-center rounded-[5px] h-[250px]">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
          className="w-full h-full"
        />
      </div>
      <div className="p-[15px]">
        <span className="block text-[#888] mb-[15px]">N° {pokemon.id}</span>
        <h3 className="text-[#333]">{pokemon.name}</h3>
        <div className="flex gap-2 mt-10px">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`${type.type.name} py-[5px] px-[20px] rounded-[5px] text-[#fff]`}
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
