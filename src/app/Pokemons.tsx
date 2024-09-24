"use client";

import { useState } from "react";
import PokemonClient from "./components/PokemonClient";
import { useTransition, animated, config, useSpring } from "@react-spring/web";

interface PokemonsProps {
  pokemons: Array<{
    id: number;
    name: string;
    image_url: string;
  }>;
}

export const Pokemons = ({ pokemons }: PokemonsProps) => {
  const [selected, setSelected] = useState<null | number>(null);
  const transitions = useTransition(
    selected ? [pokemons.find((p) => p.id === selected)!] : pokemons,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      trail: 25,
    }
  );

  // const selectedStyle = useSpring({
  //   from: { scale: 1 },
  //   to: { scale: 2 },
  //   config: {
  //     duration: 4000,
  //   },
  // });

  return transitions((style, item) => {
    return (
      <animated.div style={{ ...style }}>
        <PokemonClient
          setSelected={(id) =>
            setSelected((prevId) => (id === prevId ? null : id))
          }
          pokemon={item}
        />
      </animated.div>
    );
  });
};
