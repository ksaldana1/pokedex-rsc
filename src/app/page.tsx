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
  console.log(result);
  return (
    <div className="w-full flex flex-col items-center bg-gray-500">
      {result.data?.pokemons.map((p) => (
        <Pokemon data={p} />
      ))}
    </div>
  );
}
