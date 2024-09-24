import { graphql } from "gql.tada";
import { getClient } from "./client";
import { pokemonFragment } from "./queries";
import { Pokemons } from "./Pokemons";

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
    <div className="lg:w-1/2 md:w-3/4 grid grid-cols-3 justify-center items-center gap-y-4 md:gap-x-8 gap-x-2 pt-8">
      <Pokemons pokemons={data.pokemons} />
    </div>
  );
}
