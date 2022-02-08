import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPokemon.css";
import { pokedex } from "../../Data/pokedex";
import PokemonList from "../PokemonList/PokemonList";

export default function SearchPokemon() {
  document.title = 'Rechercher un Pokemon';

  const [nameState, setNameState] = useState("");

  const inputName = (e) => {
    setNameState(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  // Création d'un tableau avec les pokemon ayant la saisie dans leurs noms
  const filtering = (arr, name) => {
    return arr.filter(
      (pokemon) =>
        pokemon.name_fr.toString().toLowerCase().indexOf(name.toLowerCase()) !==
        -1
    );
  };

  const arraySearch = filtering(pokedex, nameState);

  let result = [];

  if (arraySearch.length === 0) {
    result.push({ name_fr: "Le pokemon n'existe pas" });
  } else if (arraySearch.length < 6) {
    result = arraySearch;
  }

  return (
    <div className="search">
      <form onSubmit={(e) => formSubmit(e)} className="form-search">
        <p>
          Entrez le nom du Pokémon <em>(Légendes Pokémon : Arceus)</em> que vous souhaitez shasser afin d'accéder à sa page.<br />
          Vous trouverez sur la page du Pokémon <strong>le compteur d'essais</strong> ainsi que la possibilité de l'ajouter à <strong><Link to={`/shinydex`}>vos shiny</Link></strong> !
        </p>
        <input
          onChange={(e) => inputName(e.target.value)}
          placeholder="Nom du Pokémon"
          type="text"
          autoFocus
        />
        <div className="request">
          {result &&
            result.map((item, uuidv4) => {
              return (
                <PokemonList
                  txt={item.name_fr}
                  key={uuidv4}
                  slug={item.slug}
                />
              );
            })}
        </div>
      </form>
    </div>
  );
}
