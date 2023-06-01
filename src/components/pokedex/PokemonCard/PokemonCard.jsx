import { useEffect, useState } from "react";
import { getPokemonById } from "../../../services/getPokemonById";
import LoaderPokeball from "../LoaderPokeball/LoaderPokeball.jsx";
import "./PokemonCard.css"

const statsTarget = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
    const [pokemon, setPokemon] = useState(null);
    const pokemonTypeClassCard = `pokemon-card ${pokemon?.types[0]}-card`;
    const pokemonTypeClassBackground = `pokemon-card__background ${pokemon?.types[0]}-background`;
    let pokemonTypeClassTitle = `pokemon-card__title ${pokemon?.types[0]}-title`;
    const pokemonTypeClassNumber = `stat-value ${pokemon?.types[0]}`;

    if(pokemon?.name.length > 18) {
      pokemonTypeClassTitle = `${pokemonTypeClassTitle} long-name`;
    }

    // Trae todas las stats cuyo nombre esté en statsTarget
    const stats = pokemon?.stats.filter(stat => statsTarget.includes(stat.name.toLowerCase()));

    useEffect(()=>{
        const loadPokemon = async () => {
            const pokemonData = await getPokemonById(pokemonId);
            setPokemon(pokemonData);
        }
        loadPokemon();
    }, [pokemonId])

    return (
      <article className={pokemonTypeClassCard}>
        {!pokemon && <LoaderPokeball/>}
        {pokemon && (
          <>
            <div className={pokemonTypeClassBackground}></div>
            <div className="pokemon-card__img">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon-card__content">
              <h2 className={pokemonTypeClassTitle}>{pokemon.name}</h2>
              <section className="pokemon-card__type-container">
                <h3 className="pokemon-card__type-text">Type: </h3>
                <ul className="pokemon-card__type-list">
                  {pokemon.types.map((type) => (
                      <li key={type} className="pokemon-card__type-item">
                          {type}
                      </li>
                  ))}
                </ul>
              </section>
              <section className="pokemon-card__stats-container">
                <h3 className="pokemon-card__stats-text">Stats</h3>
                <ul className="pokemon-card__stats-list">
                  {stats.map((stat) => (
                      <li key={stat.name} className="pokemon-card__stat-item">
                        <en>{stat.name.toUpperCase()}</en>
                        <span className={pokemonTypeClassNumber}>{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        )}
      </article>
    );
};

export default PokemonCard