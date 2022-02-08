import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SearchPokemon from "./Components/SearchPokemon/SearchPokemon"
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import Shasse from "./Components/Shasse/Shasse";
import Page404 from "./Containers/Page404/Page404";
import ShinyDex from "./Components/ShinyDex/ShinyDex";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC}>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPokemon />} />
          <Route path="/shasse/:id" element={<Shasse />} />
          <Route path="/shinydex" element={<ShinyDex />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
