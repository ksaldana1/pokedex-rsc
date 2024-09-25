import { Poppins } from "next/font/google";
import { FragmentOf, graphql, readFragment } from "gql.tada";

const font = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const pokemonFragment = graphql(`
  fragment PokemonFragment on Pokemon {
    id
    name
    image_url
  }
`);

export interface PokemonProps {
  fragment: FragmentOf<typeof pokemonFragment>;
}

export default function Pokemon({ fragment }: PokemonProps) {
  const pokemon = readFragment(pokemonFragment, fragment);
  return (
    <div
      style={{
        width: 192,
        height: 192,
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
      }}
      className={`flex flex-col justify-center items-center rounded-lg bg-white ${font.className} relative hover:bg-gray-100 hover:cursor-pointer animate-in fade-in duration-1000`}
    >
      <div className="min-w-full text-right pe-2">
        {pokemon.id.toString().padStart(4, "#000")}
      </div>
      <img
        width={128}
        height={128}
        alt={pokemon.name}
        src={pokemon.image_url}
        className="z-10"
      />
      <div
        style={{ background: "rgb(239, 239, 239)" }}
        className="absolute bottom-0 z-0 w-full rounded-lg h-1/3"
      />
      <div className="z-10 mb-2">{pokemon.name}</div>
    </div>
  );
}
