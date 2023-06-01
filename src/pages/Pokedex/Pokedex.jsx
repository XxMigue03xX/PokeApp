import { useContext } from "react"
import { UserNameContext } from "../../context/UserNameContext"
import PokemonList from "../../components/pokedex/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import FiltersForm from "../../components/pokedex/FiltersForm/FiltersForm";

import "./Pokedex.css"

const Pokedex = () => {
    const { userName } = useContext(UserNameContext);
    const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
    // const [pokemons, setPokemons] = useState([]);

    // useEffect(()=>{
    //     const loadPokemons = async () => {
    //         const pokemonsData = await getAllPokemons();
    //         setPokemons(pokemonsData);
    //     }

    //     loadPokemons();
    // }, []);

    return (
        <section>
            <p className="pokedex__message">
                <en className="pokedex__message__username">Welcome {userName}</en>, here you can found your favorite pokemon
            </p>

            <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

            { !pokemons.length ? <p>There is no pokemons</p> : (
                <PokemonList pokemons={pokemons}/>
            )}
        </section>
    )
}

export default Pokedex