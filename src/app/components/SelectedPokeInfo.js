import Image from "next/image";
import PokemonImage from "./PokemonImage";
import PokeTypeList from "./PokeTypeList";

function SelectedPokeInfo({ searchedPokemon, lng }) {
  const pokemon = searchedPokemon || { name: "No pokemon selected" };
  return (
    <div className="selected-pokemon-info flex px-2 py-2">
      <div>
        {pokemon?.image ? (
          <PokemonImage pokemon={pokemon} />
        ) : (
          <Image
            src={"/icon/pokemon/twotone-catching-pokemon.svg"}
            alt={"none"}
            width={50}
            height={50}
            className="m-3"
          />
        )}
      </div>
      <div className="space-y-1 px-3 sm:px-4">
        <div>
          {pokemon?.name ? (
            <div>
              <h2 className="text-xl font-extrabold">{pokemon?.name?.ko}</h2>
              <div className="selected-pokemon-info__types">
                <PokeTypeList types={pokemon?.types} lng={lng} />
              </div>
            </div>
          ) : (
            <h2>No pokemon selected</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedPokeInfo;
