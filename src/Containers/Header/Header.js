import React, {useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const search = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const shinyDex = useCallback(() => navigate('/shinydex', {replace: true}), [navigate]);

  return (
    <nav>
      <div className="header-background">
        <div className="navigation">
          <div className="menu">
            <div onClick={search} className="nav-loupe">
              <div className="link-loupe">
                <Link to="/">
                  Rechercher
                </Link>
              </div>
            </div>
            <div onClick={shinyDex} className="nav-pokeball">
              <div className="link-pokeball">
                <Link to="/shinydex">
                  Mes shiny
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
