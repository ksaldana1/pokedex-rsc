import { graphql } from "gql.tada";
import Pokemon, { pokemonFragment } from "../components/Pokemon";
import { getClient } from "../client";
import { PageProps } from "../../../.next/types/app/[id]/page";

const PokemonsQuery = graphql(
  `
    query Pokemon($id: Int!) {
      pokemon(id: $id) {
        ...PokemonFragment
      }
    }
  `,
  [pokemonFragment]
);

export default async function PokemonDetails({ params }: PageProps) {
  const { data } = await getClient().query(PokemonsQuery, { id: +params.id });

  if (!data?.pokemon) {
    throw new Error("No Pokemon found");
  }

  return (
    <div className="min-h-full min-w-full flex items-center justify-center">
      <Pokemon fragment={data.pokemon} key={1} />
    </div>
  );
}
