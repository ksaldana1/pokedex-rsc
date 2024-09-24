import { FragmentOf, graphql, readFragment } from "gql.tada";
import Image from "next/image";
import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
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

interface PokemonProps {
  data: FragmentOf<typeof pokemonFragment>;
}

export const Pokemon = ({ data }: PokemonProps) => {
  const pokemon = readFragment(pokemonFragment, data);
  return (
    <div
      style={{
        width: 192,
        height: 192,
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
      }}
      className={`flex flex-col justify-center items-center rounded-lg bg-white ${font.className} relative`}
    >
      <div className="text-right min-w-full pe-2">
        {pokemon.id.toString().padStart(4, "#000")}
      </div>
      <Image
        width={128}
        height={128}
        alt={pokemon.name}
        src={pokemon.image_url}
        className="z-10 object-fill"
      />
      <div
        style={{ background: "rgb(239, 239, 239)" }}
        className="h-1/3 absolute w-full bottom-0 z-0 rounded-lg"
      />
      <div className="z-10 mb-2">{pokemon.name}</div>
    </div>
  );
};
