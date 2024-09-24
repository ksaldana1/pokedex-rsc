import { FragmentOf, graphql } from "gql.tada";
import PokemonClient from "./components/PokemonClient";

export const pokemonFragment = graphql(`
  fragment PokemonFragment on Pokemon @_unmask {
    id
    name
    image_url
  }
`);

interface PokemonProps {
  pokemon: FragmentOf<typeof pokemonFragment>;
}

export const Pokemon = ({ pokemon }: PokemonProps) => {
  return <PokemonClient pokemon={pokemon} />;
};
