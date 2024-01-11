import Image from "next/image";

function SelectedPokeInfo({ searchedPokemon }) {
  const pokemon = searchedPokemon || { name: "No pokemon selected" };
  return (
    <div className="selected-pokemon-info flex px-2 py-2">
      <div>
        {pokemon?.image ? (
          <Image
            src={pokemon?.image?.default}
            alt={pokemon?.name?.ko}
            width={75}
            height={75}
          />
        ) : (
          <Image
            src={"/icon/pokemon/twotone-catching-pokemon.svg"}
            alt={"none"}
            width={75}
            height={75}
          />
        )}
      </div>
      <div className="space-y-1 px-3 sm:px-4">
        <div>
          {pokemon?.name ? (
            <h2 className="text-xl font-extrabold">{pokemon?.name?.ko}</h2>
          ) : (
            <h2>No pokemon selected</h2>
          )}
        </div>
        <div className="selected-pokemon-info__types">
          {pokemon?.types?.length > 1
            ? pokemon.types.join(", ")
            : pokemon?.types
              ? pokemon.types[0]
              : ""}
        </div>
      </div>
    </div>
  );
}

export default SelectedPokeInfo;
