"use client";

import PokemonClient from "./components/PokemonClient";

interface PokemonsProps {
  pokemons: Array<{
    id: number;
    name: string;
    image_url: string;
  }>;
}

export const Pokemons = ({ pokemons }: PokemonsProps) => {
  return pokemons.map((pokemon) => <PokemonClient pokemon={pokemon} />);
};
