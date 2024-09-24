import { graphql } from "gql.tada";
import { pokemonFragment, Pokemon } from "./Pokemon";
import { getClient } from "./client";

// prettier-ignore
const PokemonsQuery = graphql(`
    query PokemonList {
      pokemons {
        ...PokemonFragment
      }
    }
  `,
  [pokemonFragment]
);

export default async function Home() {
  const result = await getClient().query(PokemonsQuery, {});
  return (
    <div className="w-1/2 grid grid-cols-3 justify-center items-center gap-y-4 gap-x-1 pt-8">
      {result.data?.pokemons.map((p) => (
        <Pokemon data={p} />
      ))}
    </div>
  );
}
