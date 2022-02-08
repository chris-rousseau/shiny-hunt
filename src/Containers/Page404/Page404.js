import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

export default function Page404() {
  return (
    <>
      <h1>Oops, le Pokémon a prit la fuite !</h1>
      <div className="page-404">
        <p>Il n'y a rien sur cette page, vous pouvez retourner sur <Link to="/">la page d'accueil</Link> !</p>
      </div>
    </>
  );
}
