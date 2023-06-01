import { useContext } from "react";
import UserNameForm from "../../components/home/UserNameForm/UserNameForm"
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
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
              src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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