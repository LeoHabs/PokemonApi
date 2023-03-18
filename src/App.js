import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import { GlobalStyle } from "./global-styled-components";
import Options from "./components/Options/Options";
import Loading from "./components/Loading/LoadingBall";

function App() {
  const [fpokemonList, setFPokemonList] = useState([]);
  const [keyOfPokemon, setKeyOfPokemon] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=210"
      );

      const datajson = await data.json();

      const transform = await datajson.results.map(async (e, i) => {
        const name = e.name;

        const preRes = await fetch(e.url);

        const res = await preRes.json();

        return {
          key: i,
          name: name,
          type: res.types[0].type.name.toUpperCase(),
          ability: res.abilities[0].ability.name,
          specability: res.abilities[1]?.ability.name,
          hp: res.stats[0].base_stat,
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          specattack: res.stats[3].base_stat,
          specdefense: res.stats[4].base_stat,
          speed: res.stats[5].base_stat,
          height: res.height,
          weight: res.weight,
          sprite: res.sprites.other.dream_world.front_default,
        };
      });

      return Promise.all(transform);
    };

    fetchData().then((r) => {
      setFPokemonList(r)
    });
  }, [])

  return <>
    <GlobalStyle />
    <Options current={keyOfPokemon} list={fpokemonList} handler={setKeyOfPokemon}></Options>
    {fpokemonList.length === 0 ? <Loading /> : <PokeCard pokemon={fpokemonList[keyOfPokemon]}></PokeCard>}

  </>
}

export default App;
