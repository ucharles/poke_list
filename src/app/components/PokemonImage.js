"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function PokemonImage({ pokemon }) {
  const [isShiny, setIsShiny] = useState(false);

  // 새로운 포켓몬이 선택될 때마다 기본 이미지로 변경
  useEffect(() => {
    setIsShiny(false);
  }, [pokemon]);

  return (
    <div className="relative">
      <Image
        src={isShiny ? pokemon.image?.shiny : pokemon.image?.default}
        alt={pokemon?.name?.ko}
        width={74}
        height={74}
      />
      {pokemon?.image?.shiny ? (
        <button
          onClick={() => setIsShiny(!isShiny)}
          className="absolute right-0 top-0"
        >
          <Image
            src={
              isShiny
                ? "/icon/pokemon/sparkles.svg"
                : "/icon/pokemon/sparkles-outline.svg"
            }
            alt={"shiny icon"}
            width={20}
            height={20}
          />
        </button>
      ) : null}
    </div>
  );
}

export default PokemonImage;
