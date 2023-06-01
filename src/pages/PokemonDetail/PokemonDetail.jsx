import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../services/getPokemonById";
import LoaderPokeball from "../../components/pokedex/LoaderPokeball/LoaderPokeball";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  let pokemonMoves = [];

  const pokemonTypeClassBackground = `pokemon-detail__background ${pokemon?.types[0]}-background`;
  const pokemonTypeClassTitle = `pokemon-detail__title ${pokemon?.types[0]}`;
  const pokemonTypeClassId = `pokemon-detail__id ${pokemon?.types[0]}`;

  for(let i=0; i<20; i++){
    pokemonMoves.push(pokemon?.moves[i]);
  }

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };
    loadPokemon();
  }, [pokemonId]);
  return (
    <article className="pokemon-detail">
      {!pokemon && <LoaderPokeball />}
      {pokemon && (
        <>
          <div className={pokemonTypeClassBackground}></div>
          <div className="pokemon-detail__img">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>

          <div className="pokemon-detail__content">

            <h2 className={pokemonTypeClassId}># {pokemonId}</h2>
            <h2 className={pokemonTypeClassTitle}>{pokemon.name}</h2>

              <ul className="weight-and-height">
                <li>
                  <p className="weight-and-height__text">Weight</p>
                  <h2 className="weight-and-height__value">{pokemon.weight}</h2>
                </li>
                <li>
                  <p className="weight-and-height__text">Height</p>
                  <h2 className="weight-and-height__value">{pokemon.height}</h2>
                </li>
              </ul>

            <div className="types-and-abilities">
              <section className="pokemon-detail__type-container">
                <h3 className="pokemon-detail__type-text">Type</h3>
                <ul className="pokemon-detail__type-list">
                  {pokemon.types.map((type) => (
                    <div key={type} className={`pokemon-detail__type-item-container ${type}-background`}>
                      <li className="pokemon-detail__type-item">
                        {type}
                      </li>
                    </div>
                  ))}
                </ul>
              </section>
              <section className="pokemon-detail__abilities-container">
                <h3 className="pokemon-detail__abilities-text">Abilities</h3>
                <ul className="pokemon-detail__abilities-list">
                  {pokemon.abilities.map((abilitie) => (
                    <div key={abilitie} className="pokemon-detail__abilitie-item-container">
                      <li className="pokemon-detail__abilitie-item">
                        {abilitie}
                      </li>
                    </div>
                  ))}
                </ul>
              </section>
            </div>

            <section className="pokemon-detail__stats-container">
              <h3 className="pokemon-detail__stats-text">Stats</h3>
              <ul className="pokemon-detail__stats-list">
                {pokemon.stats.map((stat) => (
                  <li key={stat.name} className="pokemon-detail__stat-item">
                    <en>{stat.name.toUpperCase()}</en>
                    <span>{stat.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pokemon-detail__moves-container">
                <h3 className="pokemon-detail__moves-text">Moves</h3>
                <ul className="pokemon-detail__moves-list">
                  {pokemonMoves.map((move) => (
                    <div key={move} className="pokemon-detail__move-item-container">
                      <li className="pokemon-detail__move-item">
                        {move}
                      </li>
                    </div>
                  ))}
                </ul>
              </section>

          </div>
        </>
      )}
    </article>
  );
};

export default PokemonDetail;
