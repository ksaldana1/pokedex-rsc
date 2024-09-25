import { graphql } from "gql.tada";
import { getClient } from "./client";
import Pokemon, { pokemonFragment } from "./components/Pokemon";

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
  const { data } = await getClient().query(PokemonsQuery, {});

  if (!data?.pokemons) {
    throw new Error("No Pokemon found");
  }

  return (
    <div className="items-center justify-center pt-8 lg:w-7/12 md:w-3/4 grid grid-cols-3 gap-y-4 md:gap-x-8 gap-x-2">
      {data.pokemons.map((fragment, i) => (
        <Pokemon fragment={fragment} key={i} />
      ))}
    </div>
  );
}
