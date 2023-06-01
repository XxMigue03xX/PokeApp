import { useEffect, useState } from "react"
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../services/getAllTypes";
import "./FiltersForm.css"

const FiltersForm = ({ nameInitial, typeInitial }) => {
    const [types, setTypes] = useState([]);
    const [nameValue, setNameValue] = useState(nameInitial);
    const [typeValue, setTypeValue] = useState(typeInitial);

    useEffect(()=>{
        const loadTypes = async () => {
            const typesData = await getAllTypes();
            setTypes(typesData);
        }
        loadTypes();
    }, []);

    useEffect(() => {
        setNameValue(nameInitial);
        setTypeValue(typeInitial);
    }, [nameInitial, typeInitial]);

    const handleChange = (e) => {
        const newValue = e.target.value
        setNameValue(newValue);
    }

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setTypeValue(newType);
    }

    return (
      <Form className="form">

        <h2 className="form__text">Filters for search</h2>
        <div className="form__inputs-container">
          <input
            onChange={handleChange}
            value={nameValue}
            type="text"
            placeholder="Type your pokemon's name"
            name="pokemonName"
            className="form__input-name"
          />

            <select 
                className="form__select-type"
                name="pokemonType"
                value={typeValue}
                onChange={handleTypeChange}
            >
                <option value="">All</option>
                {types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                ))}
            </select>
            <button className="form__btn">Search</button>
        </div>
      </Form>
    );
}

export default FiltersForm