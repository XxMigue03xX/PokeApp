import { Outlet, useNavigate } from "react-router-dom"
import { UserNameContext } from "../../../context/UserNameContext";
import { useContext } from "react";
import home from "../../../assets/images/home.svg";
import pokedexImg from "../../../assets/images/pokedex.png";
import "./Layout.css";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logOut = () => {
    removeUserName();
    navigate("/")
  }

  return (
    <section className="layout">
      <div className="layout__container">
        <div className="layout__content">
          <header className="layout__header">
            <div className="header-top"></div>
            <div className="header-bottom"></div>
            <div className="header-pokedex">
              <img
                src={pokedexImg}
                alt="Pokedex"
              />
            </div>
            <div className="header-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
                alt="pokeball"
              />
            </div>
            <button className="header__home" onClick={logOut}>
              <img src={home} alt="home" />
            </button>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <footer className="layout__footer">
        <div className="footer-top"></div>
        <div className="footer-bottom"></div>
        <div className="footer-img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            alt="pokeball"
          />
        </div>
        <h4 className="footer-text1">Made with ❤️ in Academlo</h4>
        <h4 className="footer-text2">Developer: Miguel Garavito</h4>
      </footer>
    </section>
  );
}

export default Layout