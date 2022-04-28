import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./configs.scss";
import App from "./App";
import Amostras from "./Amostras";
import Menu from "./menu";
import Contato from "./Contato";
import Home from './Home';
import Sobre from "./Sobre";
import Encomendar from './Encomendar';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
);