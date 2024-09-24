import { animated, useSpring } from "@react-spring/web";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export interface PokemonClientProps {
  pokemon: {
    id: number;
    name: string;
    image_url: string;
  };
  setSelected: (id: number) => void;
  selected: boolean;
}

export default function PokemonClient({
  pokemon,
  setSelected,
  selected,
}: PokemonClientProps) {
  const transformStyle = useSpring({
    transform: selected ? "scale(2)" : "scale(1)",
  });

  return (
    <animated.div
      style={{
        width: 192,
        height: 192,
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
        ...transformStyle,
      }}
      onClick={() => setSelected(pokemon.id)}
      className={`flex flex-col justify-center items-center rounded-lg bg-white ${font.className} relative hover:bg-gray-100 hover:cursor-pointer`}
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
    </animated.div>
  );
}
