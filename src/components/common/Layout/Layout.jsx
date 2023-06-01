import { Outlet, useNavigate } from "react-router-dom"
import "./Layout.css"
import { UserNameContext } from "../../../context/UserNameContext";
import { useContext } from "react";
import home from "../../../assets/images/home.svg"

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
                src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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