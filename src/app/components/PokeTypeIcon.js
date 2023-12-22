import Image from "next/image";
// type을 문자열로 받아서 이미지를 불러오는 함수

/*
    노말 : 0
    불 : 1
    물 : 2
    풀 : 3
    전기 : 4
    얼음 : 5
    격투 : 6
    독 : 7
    땅 : 8
    비행 : 9
    에스퍼 : 10
    벌레 : 11
    바위 : 12
    고스트 : 13
    드래곤 : 14
    악 : 15
    강철 : 16
    페어리 : 17
*/

function PokeTypeIcon({ type, className, width }) {
  const getTypeIcon = (type) => {
    const pokeTypeIconObject = {
      alt: "Normal Type",
      src: "/icon/poketypes/normal.svg",
    };

    switch (type) {
      case "normal":
        pokeTypeIconObject.alt = "Normal Type";
        pokeTypeIconObject.src = "/icon/poketypes/normal.svg";
        return pokeTypeIconObject;
      case "fire":
        pokeTypeIconObject.alt = "Fire Type";
        pokeTypeIconObject.src = "/icon/poketypes/fire.svg";
        return pokeTypeIconObject;
      case "water":
        pokeTypeIconObject.alt = "Water Type";
        pokeTypeIconObject.src = "/icon/poketypes/water.svg";
        return pokeTypeIconObject;
      case "grass":
        pokeTypeIconObject.alt = "Grass Type";
        pokeTypeIconObject.src = "/icon/poketypes/grass.svg";
        return pokeTypeIconObject;
      case "electric":
        pokeTypeIconObject.alt = "Electric Type";
        pokeTypeIconObject.src = "/icon/poketypes/electric.svg";
        return pokeTypeIconObject;
      case "ice":
        pokeTypeIconObject.alt = "Ice Type";
        pokeTypeIconObject.src = "/icon/poketypes/ice.svg";
        return pokeTypeIconObject;
      case "fighting":
        pokeTypeIconObject.alt = "Fighting Type";
        pokeTypeIconObject.src = "/icon/poketypes/fighting.svg";
        return pokeTypeIconObject;
      case "poison":
        pokeTypeIconObject.alt = "Poison Type";
        pokeTypeIconObject.src = "/icon/poketypes/poison.svg";
        return pokeTypeIconObject;
      case "ground":
        pokeTypeIconObject.alt = "Ground Type";
        pokeTypeIconObject.src = "/icon/poketypes/ground.svg";
        return pokeTypeIconObject;
      case "flying":
        pokeTypeIconObject.alt = "Flying Type";
        pokeTypeIconObject.src = "/icon/poketypes/flying.svg";
        return pokeTypeIconObject;
      case "psychic":
        pokeTypeIconObject.alt = "Psychic Type";
        pokeTypeIconObject.src = "/icon/poketypes/psychic.svg";
        return pokeTypeIconObject;
      case "bug":
        pokeTypeIconObject.alt = "Bug Type";
        pokeTypeIconObject.src = "/icon/poketypes/bug.svg";
        return pokeTypeIconObject;
      case "rock":
        pokeTypeIconObject.alt = "Rock Type";
        pokeTypeIconObject.src = "/icon/poketypes/rock.svg";
        return pokeTypeIconObject;
      case "ghost":
        pokeTypeIconObject.alt = "Ghost Type";
        pokeTypeIconObject.src = "/icon/poketypes/ghost.svg";
        return pokeTypeIconObject;
      case "dragon":
        pokeTypeIconObject.alt = "Dragon Type";
        pokeTypeIconObject.src = "/icon/poketypes/dragon.svg";
        return pokeTypeIconObject;
      case "dark":
        pokeTypeIconObject.alt = "Dark Type";
        pokeTypeIconObject.src = "/icon/poketypes/dark.svg";
        return pokeTypeIconObject;
      case "steel":
        pokeTypeIconObject.alt = "Steel Type";
        pokeTypeIconObject.src = "/icon/poketypes/steel.svg";
        return pokeTypeIconObject;
      case "fairy":
        pokeTypeIconObject.alt = "Fairy Type";
        pokeTypeIconObject.src = "/icon/poketypes/fairy.svg";
        return pokeTypeIconObject;

      default:
        return pokeTypeIconObject;
    }
  };

  const pokeTypeIconObject = getTypeIcon(type);

  return (
    <Image
      className={className}
      alt={pokeTypeIconObject.alt}
      src={pokeTypeIconObject.src}
      width={width}
      height={width}
    />
  );
}

export default PokeTypeIcon;
