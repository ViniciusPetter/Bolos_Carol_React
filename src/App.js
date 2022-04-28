import * as React from "react";

import Home from './Home';
import Sobre from './Sobre';
import Encomendar from './Encomendar';
import Amostras from './Amostras';
import Contato from './Contato';
import { Routes, Route, Router } from "react-router-dom";
import Menu from "./menu";

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="amostras" element={<Amostras />} />
        <Route path="contatos" element={<Contato />} />
        <Route path="encomendar" element={<Encomendar />} />
      </Routes>
    </div>
  );
}