import React, { useContext } from "react";
import FilterIcon from "@/svg/FilterIcon.jsx";
import PokemonList from "@/components/PokemonList";
import FilterBar from "@/components/FilterBar";
import { PokemonContext } from "@/context/PokemonContext";

const HomePage = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);

  return (
    <>
      {/* <div className="flex max-w-[1200px] my-0 mx-auto">
        <div
          className="flex items-center gap-4 mb-[20px] cursor-pointer"
          onClick={() => setActive(!active)}
        >
          <FilterIcon className="w-[30px] h-[30px] stroke-[#555]" />
          <span>Filtrar</span>
        </div>
      </div> */}

      <PokemonList />
      <FilterBar />

      <div className="flex justify-center my-[20px] max-w-[1200px]  mx-auto">
        <button
          className="border-none py-[15px] px-[40px] bg-primary text-[#fff] cursor-pointer rounded-[10px] hover:text-[#000] hover:bg-primaryHover"
          onClick={onClickLoadMore}
        >
          Cargar más
        </button>
      </div>
    </>
  );
};

export default HomePage;
