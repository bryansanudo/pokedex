import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import { useParams } from "react-router-dom";
import { primerMayuscula } from "@/helper/helper";
import Loader from "@/components/Loader";

const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <div className="flex justify-center">
      <main className="flex items-center flex-col  pt-36 md:pt-24 ">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex items-center relative flex-col lg:flex-row lg:gap-36">
              <div className="flex items-center justify-center gap-6">
                <span className="text-[50px] md:text-[100px] font-bold hover:text-primaryHover">
                  #{pokemon.id}
                </span>

                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                  className="h-[150px] md:h-[250px] lg:h-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[30px] md:text-[60px] mb-5">
                  {primerMayuscula(pokemon.name)}
                </h1>
                <div className="flex gap-3">
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className={`${type.type.name} text-[12px] py-[5px] px-[20px] rounded-[5px] text-[#fff]`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-[20px] ">
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-[20px]">Altura</p>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-[20px]">Peso</p>
                    <span>{pokemon.weight}KG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center w-[350px] mx-auto shadow-xl shadow-black p-6 mt-10 rounded-3xl mb-20">
              <h1>Estadísticas</h1>
              <div className="flex flex-col gap-[20px] flex-[1]">
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">Hp</span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[0].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">Attack</span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[1].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">Defense</span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[2].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">
                    Special Attack
                  </span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[3].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">
                    Special Defense
                  </span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[4].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className=" font-semibold text-[18px]">Speed</span>
                  <div className="w-full" />
                  <span className="counter-stat">
                    {pokemon.stats[5].base_stat}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default PokemonPage;
