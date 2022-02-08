import React from "react";
import "./PokemonList.css";
import { Link } from "react-router-dom";

export default function PokemonList(props) {
  let error = false;

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (props.txt === "Le pokemon n'existe pas") {
    error = true;
  }

  const dataImg = "/assets/img/" + props.slug + ".png";
  const altImg = "Illustration de " + props.txt;

  return (
    <>
      <div className="pokemon-list">
        {error ? (
          <span className="no-pokemon">Le pokemon n'existe pas</span>
        ) : (
          <div className="center-request">
            <Link to={`/shasse/${props.slug}`}>
              <div className="request-pokemon">
                <img src={dataImg} alt={altImg} />
                <span className="request-pokemon-name">
                  {capitalizeFirstLetter(props.txt)}
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
