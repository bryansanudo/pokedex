import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HomePage from "@/pages/HomePage";
import PokemonPage from "@/pages/PokemonPage";
import SearchPage from "@/pages/SearchPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />}></Route>
        <Route path="pokemon/:id" element={<PokemonPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AppRouter;
