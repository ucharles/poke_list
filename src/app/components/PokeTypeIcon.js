import Image from "next/image";
import { PokeTypeColor, PokeTypeKor } from "../types/poketypes";

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

function PokeTypeIcon({ type, width = 24, lng }) {
  const getTypeIcon = (type) => {
    const pokeTypeIconObject = {
      alt: "Normal Type",
      src: "/icon/poketypes/normal.svg",
    };

    switch (type) {
      case "Normal":
        pokeTypeIconObject.alt = "Normal Type";
        pokeTypeIconObject.src = "/icon/poketypes/normal.svg";
        return pokeTypeIconObject;
      case "Fire":
        pokeTypeIconObject.alt = "Fire Type";
        pokeTypeIconObject.src = "/icon/poketypes/fire.svg";
        return pokeTypeIconObject;
      case "Water":
        pokeTypeIconObject.alt = "Water Type";
        pokeTypeIconObject.src = "/icon/poketypes/water.svg";
        return pokeTypeIconObject;
      case "Grass":
        pokeTypeIconObject.alt = "Grass Type";
        pokeTypeIconObject.src = "/icon/poketypes/grass.svg";
        return pokeTypeIconObject;
      case "Electric":
        pokeTypeIconObject.alt = "Electric Type";
        pokeTypeIconObject.src = "/icon/poketypes/electric.svg";
        return pokeTypeIconObject;
      case "Ice":
        pokeTypeIconObject.alt = "Ice Type";
        pokeTypeIconObject.src = "/icon/poketypes/ice.svg";
        return pokeTypeIconObject;
      case "Fighting":
        pokeTypeIconObject.alt = "Fighting Type";
        pokeTypeIconObject.src = "/icon/poketypes/fighting.svg";
        return pokeTypeIconObject;
      case "Poison":
        pokeTypeIconObject.alt = "Poison Type";
        pokeTypeIconObject.src = "/icon/poketypes/poison.svg";
        return pokeTypeIconObject;
      case "Ground":
        pokeTypeIconObject.alt = "Ground Type";
        pokeTypeIconObject.src = "/icon/poketypes/ground.svg";
        return pokeTypeIconObject;
      case "Flying":
        pokeTypeIconObject.alt = "Flying Type";
        pokeTypeIconObject.src = "/icon/poketypes/flying.svg";
        return pokeTypeIconObject;
      case "Psychic":
        pokeTypeIconObject.alt = "Psychic Type";
        pokeTypeIconObject.src = "/icon/poketypes/psychic.svg";
        return pokeTypeIconObject;
      case "Bug":
        pokeTypeIconObject.alt = "Bug Type";
        pokeTypeIconObject.src = "/icon/poketypes/bug.svg";
        return pokeTypeIconObject;
      case "Rock":
        pokeTypeIconObject.alt = "Rock Type";
        pokeTypeIconObject.src = "/icon/poketypes/rock.svg";
        return pokeTypeIconObject;
      case "Ghost":
        pokeTypeIconObject.alt = "Ghost Type";
        pokeTypeIconObject.src = "/icon/poketypes/ghost.svg";
        return pokeTypeIconObject;
      case "Dragon":
        pokeTypeIconObject.alt = "Dragon Type";
        pokeTypeIconObject.src = "/icon/poketypes/dragon.svg";
        return pokeTypeIconObject;
      case "Dark":
        pokeTypeIconObject.alt = "Dark Type";
        pokeTypeIconObject.src = "/icon/poketypes/dark.svg";
        return pokeTypeIconObject;
      case "Steel":
        pokeTypeIconObject.alt = "Steel Type";
        pokeTypeIconObject.src = "/icon/poketypes/steel.svg";
        return pokeTypeIconObject;
      case "Fairy":
        pokeTypeIconObject.alt = "Fairy Type";
        pokeTypeIconObject.src = "/icon/poketypes/fairy.svg";
        return pokeTypeIconObject;

      default:
        return pokeTypeIconObject;
    }
  };

  const pokeTypeIconObject = getTypeIcon(type);

  return (
    <div
      className="mr-1 flex h-9 w-full items-center justify-center rounded-md"
      style={{ backgroundColor: PokeTypeColor[type] }}
    >
      <Image
        alt={pokeTypeIconObject.alt}
        src={pokeTypeIconObject.src}
        width={30}
        height={30}
        className="sm:ml-1"
      />
      <div className="hidden w-full items-center justify-center overflow-hidden font-bold text-gray-50 sm:flex">
        <p>
          {lng === "ko" ? PokeTypeKor[type] : type.toString().toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default PokeTypeIcon;
