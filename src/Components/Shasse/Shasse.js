import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokedex } from "../../Data/pokedex";
import { Link } from "react-router-dom";
import imgPokeball from "../../Containers/Header/img/pokeball-blanche.png";
import etoile from "./img/etoile-blanche.png";
import "./Shasse.css";

export default function Shasse() {
  const slug = useParams();
  const [nbTry, setNbTry] = useState(0);
  const [modal, setModal] = useState(false);
  const [shiny, setShiny] = useState(false);

  const searchPokemon = () => {
    return pokedex.filter((pokemon) => pokemon.slug.indexOf(slug.id) !== -1);
  };

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const pokemon = searchPokemon();
  document.title = capitalizeFirstLetter(pokemon[0].name_fr) + ' - Shasse';

  useEffect(() => {
    if (localStorage.getItem(pokemon[0].slug) !== null) {
      setNbTry(parseInt(localStorage.getItem(pokemon[0].slug), 10));
    }
  }, []);

  // -1 au compteur
  const minusCount = () => {
    setNbTry(nbTry - 1);
    localStorage.setItem(pokemon[0].slug, nbTry - 1);
  };

  // +1 au compteur
  const plusCount = (e) => {
    e.preventDefault();
    
    if (localStorage.getItem(pokemon[0].slug) === null) {
      setNbTry(1);
    } else {
      setNbTry(nbTry + 1);
    }
    localStorage.setItem(pokemon[0].slug, nbTry + 1);
  };

  if (nbTry < 0) {
    setNbTry(0);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleShiny = () => {
    setShiny(!shiny);
  };

  // Ajoute +1 au compteur à l'appuie d'une touche du clavier
  useEffect(() => {
    window.addEventListener("keyup", plusCount);

    return () => {
      window.removeEventListener("keyup", plusCount);
    };
  });

  const closeInfo = () => {
    const info = document.querySelector(".info-space-button");
    info.remove();
  };

  // Ajout du Pokemon au localStorage
  const gotIt = () => {
    let shinyGotcha = pokemon[0].slug;

    if (localStorage.getItem("shiny") === null) {
      let shiny = [pokemon[0].slug];
      localStorage.setItem("shiny", shiny);
    } else {
      let arrayShiny = [localStorage.getItem("shiny")];
      arrayShiny.push(shinyGotcha);
      localStorage.setItem("shiny", arrayShiny);
    }
    setModal(false);
  };

  let resultShiny;
  let arrayShiny = [];
  if (localStorage.getItem("shiny") !== null) {
    arrayShiny = localStorage.getItem("shiny").split(",");
  }

  // Affichage soit du bouton shiny soit d'un message 
  if (arrayShiny.indexOf(pokemon[0].slug) === -1) {
    resultShiny = (
      <div className="result-shiny">
        <img src={etoile} alt="Illustration d'une étoile" />
        <img src={etoile} alt="Illustration d'une étoile" />
        <img src={etoile} alt="Illustration d'une étoile" />
        <button className="gotcha-button" onClick={toggleModal}>
          Il est shiny !!
        </button>
      </div>
    );
  } else {
    resultShiny = (
      <span className="gotcha">
        <img src={imgPokeball} alt="" />
        Shiny ajouté dans le&nbsp;  <Link to={`/shinydex`}>shiny dex</Link>
      </span>
    );
  }

  const dataImg = "/assets/img/" + pokemon[0].slug + ".png";
  const dataImgShiny = "/assets/img/" + pokemon[0].slug + "-s.png";
  const altImg = "Illustration de " + pokemon[0].name_fr;

  return (
    <>
      <div className="shasse-content">
        <div className="pokemon-info">
          <div className="center-shasse-info">
            <div className="shasse-info">
              {shiny ? (
                <img src={dataImgShiny} alt={altImg} />
              ) : (
                <img src={dataImg} alt={altImg} />
              )}
              <p>{capitalizeFirstLetter(pokemon[0].name_fr)}</p>
            </div>
          </div>
          <div className="button-shiny">
            <button onClick={toggleShiny}>
              {shiny ? "Voir en normal" : "Voir en shiny"}
            </button>
          </div>
        </div>
        <div className="try">
          <div className="counter">{nbTry}</div>
        </div>
        <div className="try-buttons">
          <button className="try-minus-button" onClick={minusCount}>
            -1
          </button>
          <button className="try-plus-button" onClick={(e) => plusCount(e)}>
            Ajouter +1
          </button>
        </div>
        <div className="info-space-button">
          <div onClick={closeInfo} className="close-info">
            x
          </div>
          <p>
            Si vous êtes sur PC, vous pouvez appuyer sur la touche espace de
            votre clavier pour ajouter 1 au compteur !
          </p>
        </div>
        {resultShiny}
        {modal && (
          <div className="dark-modal">
            <div className="modal">
              C'est fait, tu viens de l'attraper en shiny ?!
              <div className="modal-buttons">
                <button onClick={toggleModal} className="button-no">
                  Non 😞
                </button>
                <button onClick={gotIt} className="button-yes">
                  Oui 😍
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
