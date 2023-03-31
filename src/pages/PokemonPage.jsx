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
    <main className="max-w-[1200px] my-0 mx-auto flex flex-col mt-[100px] mb-[50px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-[20px] flex items-center relative">
            <span className="absolute top-[-130px] left-0 text-[200px] font-bold hover:text-primaryHover">
              #{pokemon.id}
            </span>
            <div className="order-[2] flex-[1] py-[25px] pl-0 h-[400px] ">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="flex flex-col order-[1] flex-[1] ">
              <h1 className="text-right text-[60px]">
                {primerMayuscula(pokemon.name)}
              </h1>
              <div className="flex gap-[10px] mt-[10px] info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`${type.type.name} text-[12px] py-[5px] px-[20px] rounded-[5px] text-[#fff]`}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-[20px]">
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

          <div className="flex gap-[50px] items-center">
            <h1>Estadísticas</h1>
            <div className="flex flex-col gap-[20px] flex-[1]">
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">Hp</span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">
                  Attack
                </span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">
                  Defense
                </span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">
                  Special Attack
                </span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">
                  Special Defense
                </span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <span className="flex-[20%] font-semibold text-[18px]">
                  Speed
                </span>
                <div className="w-full h-30px bg-primary rounded-[10px]"></div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
