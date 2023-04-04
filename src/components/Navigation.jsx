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
      <div className="fixed w-full md:h-20 h-32 bg-gray-900 z-40">
        <div className="flex flex-col md:flex-row md:justify-between gap-2  items-center max-w-screen-xl mx-auto px-10  h-full">
          <div className="flex items-center mt-2">
            <Link to="/" className="logo">
              <img
                src="/logoPokedex.png"
                alt="Logo Pokedex"
                className="w-[150px]"
              />
            </Link>
          </div>

          <div className="flex items-center flex-row justify-center  ">
            <form className="flex items-center gap-2" onSubmit={onSearchSubmit}>
              <div className="flex items-center gap-2 border-2 border-solid  border-[#555] py-2 px-[10px] rounded-[25px]">
                <Search className="w-[20px] h-[20px] stroke-[#555]" />
                <input
                  type="search"
                  name="valueSearch"
                  id=""
                  value={valueSearch}
                  onChange={onInputChange}
                  placeholder="Nombre"
                  className="w-[100px] border-none bg-gray-900 text-white outline-none text-[15px]"
                />
              </div>

              <button className="border-none outline-none rounded-[25px] py-2 px-[30px] text-[#fff] bg-primary hover:bg-primaryHover hover:text-[#000]">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
