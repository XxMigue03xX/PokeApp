import { useRef, useState } from "react"
import "./UserNameForm.css"
const UserNameForm = ({ onSendName }) => {
    const [userNameValue, setUserNameValue] = useState("");
    const [nameError, setNameError] = useState("");
    const hasInputAlreadyTouched = useRef(false);

    const handleChange = (e) => {
        const nameValue = e.target.value;
        if(!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;
        if(nameValue === "") setNameError("El nombre está vacío!");
        // Regexp que testea que el nombre tenga algo distinto a letras y espacios
        else if(/[^a-z ]/i.test(nameValue)) setNameError("Solo puedes ingresar letras y espacios!");
        // Regexp que testea que el nombre tenga menos de 3 letras o mas de 15
        else if(!/^[a-z]{3,15} ?$/i.test(nameValue)) setNameError("El nombre debe tener minimo 3 caracteres y maximo 15");
        else setNameError("");
        setUserNameValue(nameValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nameError === "" && hasInputAlreadyTouched.current) onSendName(userNameValue);
    }

    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="input-and-button">
          <input
            className="form__input"
            type="text"
            placeholder="Your Name"
            value={userNameValue}
            onChange={handleChange}
            />
          <button className="form__button" type="submit">Start</button>
        </div>
        {Boolean(nameError) && <p className="form__error">{nameError}</p>}
      </form>
    );
}

export default UserNameForm