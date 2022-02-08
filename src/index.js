import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import Shasse from "./Components/Shasse/Shasse";
import Page404 from "./Containers/Page404/Page404";
import ShinyDex from "./Components/ShinyDex/ShinyDex";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shasse/:id" element={<Shasse />} />
      <Route path="/shinydex" element={<ShinyDex />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
