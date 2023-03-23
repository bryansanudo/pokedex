import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Search from "@/svg/SearchIcon";
import { PokemonContext } from "@/context/PokemonContext";

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="max-w-[1200px] mx-auto my-0 flex items-center justify-between px-0 py-[40px]">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
            className="w-[150px]"
          />
        </Link>

        <form className="flex items-center gap-2" onSubmit={onSearchSubmit}>
          <div className="flex items-center gap-2 border-2 border-solid  border-[#555] py-[15px] px-[10px] rounded-[25px]">
            <Search className="w-[20px] h-[20px] stroke-[#555]" />
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
              className="w-[300px] border-none outline-none text-[15px]"
            />
          </div>

          <button className="border-none outline-none rounded-[25px] py-[15px] px-[30px] text-[#fff] bg-primary hover:bg-primaryHover hover:text-[#000]">
            Buscar
          </button>
        </form>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
