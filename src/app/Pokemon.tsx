import { FragmentOf, graphql, readFragment } from "gql.tada";

export const pokemonFragment = graphql(`
  fragment PokemonFragment on Pokemon {
    id
    name
  }
`);

interface PokemonProps {
  data: FragmentOf<typeof pokemonFragment>;
}

export const Pokemon = ({ data }: PokemonProps) => {
  const pokemon = readFragment(pokemonFragment, data);
  return <div>{pokemon.name}</div>;
};
