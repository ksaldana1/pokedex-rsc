import { graphql } from "gql.tada";

export const pokemonFragment = graphql(`
  fragment PokemonFragment on Pokemon @_unmask {
    id
    name
    image_url
  }
`);
