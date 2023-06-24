import { useContext } from "react";
import UserNameForm from "../../components/home/UserNameForm/UserNameForm"
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
import pokedexImg from "../../assets/images/pokedex.png"
import "./Home.css"
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveUserName } = useContext(UserNameContext);
  const from = location.state?.from ?? "/pokedex";

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  }

  return (
    <section className="home">
        <div className="home__main">
          <div className="logo-container">
            <img
              src={pokedexImg}
              alt="Pokedex"
            />
          </div>
          <h1 className="home__title">Hello trainer!</h1>
          <p className="home__description">Type your name to start</p>
          <div className="home__form-container">
            <UserNameForm onSendName={handleSendName} />
          </div>
        </div>
      <footer className="home__footer">
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
};

export default Home