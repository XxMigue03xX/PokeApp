import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination";
import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css"
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
    const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
    const [ currentPage, totalPages, pokemonsSlice, changePageTo ] = usePagination(pokemons, pokemonsPerPage);

    return (
      <secrtion>
        <PagesComponent
          totalPages={totalPages}
          onChangePage={changePageTo}
          onNextPage={() => changePageTo(currentPage + 1)}
          onBackPage={() => changePageTo(currentPage - 1)}
          currentPage={currentPage}
        />

        <ul className="pokemons-container">
          {pokemonsSlice.map((pokemon) => (
            <li key={pokemon.url}>
              <Link style={{ color: "unset", textDecoration: "unset"}} to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
                <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
              </Link>
            </li>
          ))}
        </ul>

        <PagesComponent
          totalPages={totalPages}
          onChangePage={changePageTo}
          onNextPage={() => changePageTo(currentPage + 1)}
          onBackPage={() => changePageTo(currentPage - 1)}
          currentPage={currentPage}
        />
      </secrtion>
    );
}

export default PokemonList