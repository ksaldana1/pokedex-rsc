"use client";

import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";
import PokemonClient from "./components/PokemonClient";

interface PokemonsProps {
  pokemons: Array<{
    id: number;
    name: string;
    image_url: string;
  }>;
}

export const Pokemons = ({ pokemons }: PokemonsProps) => {
  const [selected, setSelected] = useState<null | number>(null);
  const transitions = useTransition(pokemons, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 25,
  });

  return transitions((style, item) => {
    return (
      <animated.div style={{ ...style, position: "relative" }}>
        <PokemonClient
          selected={selected === item.id}
          setSelected={(id) =>
            setSelected((prevId) => (id === prevId ? null : id))
          }
          pokemon={item}
        />
      </animated.div>
    );
  });
};
