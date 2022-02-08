import React from "react";
import { pokedex } from "../../Data/pokedex";
import "./ShinyDex.css";

export default function ShinyDex() {
  document.title = 'Mes shiny';

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  let arrayPokemon = false;
  let arrayShiny = [];

  // Ajout des shiny du localstorage dans un tableau pour l'afficher sur la page
  if (localStorage.getItem("shiny") !== null) {
    arrayShiny = localStorage.getItem("shiny").split(",");

    arrayPokemon = [];
    arrayShiny.forEach((el) => {
      arrayPokemon.push(
        pokedex.filter((pokemon) => pokemon.slug.indexOf(el) !== -1)
      );
    });
  }

  return (
    <>
      <div className="shinydex-container">
        {arrayPokemon ? (
          arrayPokemon.map((item, index) => {
            let altImg = "Illustration de " + item[0].name_fr;
            return (
              <div className="center-dex" key={item[0].id}>
                <div className="shiny-dex">
                  <div className="shiny-list">
                    <img
                      src={`/assets/img/${item[0].slug}-s.png`}
                      alt={altImg}
                    />
                    <span className="shiny-list-name">
                      <strong>{capitalizeFirstLetter(item[0].name_fr)}</strong>{" "}
                      {" • "}
                      <em>
                        {localStorage.getItem(item[0].slug) || 0}{" "}
                        {localStorage.getItem(item[0].slug) > 1
                          ? "essais"
                          : "essai"}
                      </em>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-shiny">Pas encore de shiny 😥</div>
        )}
      </div>
    </>
  );
}
