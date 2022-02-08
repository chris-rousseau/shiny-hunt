import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [info, setInfo] = useState(false);

  const informations = (e) => {
    e.preventDefault();
    setInfo(!info);
  };

  const clearData = () => {
    localStorage.clear();
    const button = document.querySelector(".delete-data");
    button.textContent = "Données supprimées";
    button.classList.add("data-clear");
  };

  return (
    <>
      <div className="footer">
        <p>
          Développé par{" "}
          <a href="https://chrisdev.fr" target="_blank">
            Chris
          </a>{" "}
          •{" "}
          <a href="" onClick={(e) => informations(e)}>
            Informations
          </a>
        </p>
      </div>
      {info && (
        <div className="dark-modal">
          <div className="modal-info">
            <h2>Vos données</h2>
            <p>
              Aucune de vos données personnelles ne sont enregistrées sur le
              site. Les seules données stockées sur votre ordinateur sont les
              compteurs pour chaques Pokémon que vous shassez et la liste des
              Pokémon que vous avez dans le shinyDex.
            </p>
            <p>
              Vous pouvez supprimer ces données à tout moment en cliquant sur le
              bouton ci-dessous.
              <br />
              <strong>
                Attention : La suppression des données supprimera la totalités
                de vos compteurs et shiny.
              </strong>
            </p>
            <button onClick={clearData} className="delete-data">
              Supprimer les données
            </button>
            <h2>Les images</h2>
            <p>Les icones utilisées sur le site viennent du site Flaticon :</p>
            <ul>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/search"
                  target="_blank"
                  title="search icons"
                >
                  Search icons created by Freepik - Flaticon
                </a>
              </li>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/pokemon"
                  target="_blank"
                  title="pokemon icons"
                >
                  Pokemon icons created by Freepik - Flaticon
                </a>
              </li>
            </ul>
            <button onClick={informations} className="close-modal">
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
