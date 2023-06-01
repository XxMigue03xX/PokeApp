import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByType } from "../../services/getPokemonsByType";

export const pokedexLoader = async ({request}) => {
    const url = new URL(request.url);
    const pokemonName = url.searchParams.get("pokemonName");
    const pokemonTypeId = url.searchParams.get("pokemonType");

    let pokemons;

    // Filtros cruzados, se envia tanto nombre como tipo
    if(pokemonName && pokemonTypeId) {
        pokemons = await getPokemonsByType(pokemonTypeId);
        pokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );
    }else if(!pokemonName && !pokemonTypeId) {
        // Sin filtros
        pokemons = await getAllPokemons();
    }else if(pokemonTypeId){
        // Solo filtrar por tipo
        pokemons = await getPokemonsByType(pokemonTypeId);
    }else if(pokemonName) {
        // Solo filtrar por nombre
        pokemons = await getAllPokemons();
        pokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );
    }

    return { pokemons, pokemonName, pokemonTypeId };
};