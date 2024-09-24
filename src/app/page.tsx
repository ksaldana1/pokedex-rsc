import { graphql } from "gql.tada";
import { getClient } from "./client";
import { Pokemon, pokemonFragment } from "./Pokemon";

const PokemonsQuery = graphql(
  `
    query PokemonList {
      pokemons {
        ...PokemonFragment
      }
    }
  `,
  [pokemonFragment]
);

export default async function Home() {
  const { data } = await getClient().query(PokemonsQuery, {});

  if (!data?.pokemons) {
    throw new Error("No Pokemon found");
  }

  return (
    <div className="w-1/2 grid grid-cols-3 justify-center items-center gap-y-4 gap-x-1 pt-8">
      {data?.pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
