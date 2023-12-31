// SelectGeneration에서 선택된 값에 따라 검색 범위가 달라짐.
// library
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

// component

// util
import { Dex } from "@pkmn/dex";
import { Generations } from "@pkmn/data";
import { createGenList } from "../utils/generationFunction";
import { GetPATCH, TYPE_LIST } from "../poke_data.js";

function SearchPokemon({ setResultFc }) {
  // 검색에 사용할 세대별 Array 생성
  const gens = new Generations(Dex);
  const RBY = createGenList(gens, 1);
  const GSC = createGenList(gens, 2);
  const ADV = createGenList(gens, 3);
  const DPP = createGenList(gens, 4);
  const BW = createGenList(gens, 5);
  const XY = createGenList(gens, 6);
  const SM = createGenList(gens, 7);
  const SWSH = createGenList(gens, 8);
  const SV = SWSH;

  // 세대 선택 시 포켓몬 리스트 교체
  function changeGen(str) {
    switch (str) {
      case "RBY":
        setPokemons(RBY);
        break;
      case "GSC":
        setPokemons(GSC);
        break;
      case "ADV":
        setPokemons(ADV);
        break;
      case "DPP":
        setPokemons(DPP);
        break;
      case "BW":
        setPokemons(BW);
        break;
      case "XY":
        setPokemons(XY);
        break;
      case "SM":
        setPokemons(SM);
        break;
      case "SWSH":
        setPokemons(SWSH);
        break;
      case "SV":
        setPokemons(SV);
        break;
      default:
        setPokemons(SV);
    }
  }

  function autoComplete(str) {
    setInputVal(str);
    setSearch(str);
    setIsHidden(false);
  }

  // Handle keyboard input
  // const handleKeyDown = (e) => {
  //   if (e.key === "ArrowUp" && selectedIndex > 0) {
  //     setSelectedIndex(selectedIndex - 1);
  //     setInputVal(items[selectedIndex - 1]);
  //   } else if (e.key === "ArrowDown" && selectedIndex < items.length - 1) {
  //     setSelectedIndex(selectedIndex + 1);
  //     setInputVal(items[selectedIndex + 1]);
  //   } else if (e.key === "Enter") {
  //     setInputVal(items[selectedIndex]);
  //     setIsHidden(true);
  //   }
  // };

  // 자동 완성 리스트 키 및 마우스 조작 이벤트
  function autoCompleteKeyEvent(key, target = null) {
    let temp = document.getElementsByClassName("list");
    let list = [];
    let index = -1;
    for (const l of temp) {
      if (l.getAttribute("hidden") === null) {
        list.push(l);
        if (l.style.background === "yellow") {
          index = list.length - 1;
        }
      }
    }
    switch (key) {
      case "MouseOver":
        for (const l of list) {
          l.style.background = "none";
        }
        target.style.background = "yellow";
        break;
      case "ArrowDown":
        if (index != -1 && index + 1 < list.length) {
          list[index].style.background = "none";
        }
        if (index + 1 != list.length) {
          list[index + 1].style.background = "yellow";
        }
        break;

      case "ArrowUp":
        if (index - 1 > -1) {
          list[index - 1].style.background = "yellow";
        }
        if (index > 0 && index != list.length) {
          list[index].style.background = "none";
        }
        break;

      case "Enter":
        // Enter 이후 검색할 문자열 저장
        let searchVal = target;
        if (index !== -1) {
          setInputVal(list[index].innerText);
          list[index].style.background = "none";
          // 자동 검색 리스트에서 선택한 것이 있을 경우 문자열 변경
          searchVal = list[index].innerText;
        }
        document.activeElement.blur();
        // 포켓몬 검색
        searchPokemon(searchVal);
        console.log("enter");
        console.log("enter e.target.innerText:", searchVal);

        break;
    }
  }

  // 포켓몬 검색
  function searchPokemon(str) {
    let searchPokemon;
    // 검색되는게 있으면
    console.log("Search pokemon:", searchPokemon);
    if ((searchPokemon = pokemons.find((e) => e.name.ko === str))) {
      // 이후 이런저런거 하기
      setResultFc(searchPokemon);
      setSearchYN(false);
    }
  }

  const [pokemons, setPokemons] = useState(SV);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [searchYN, setSearchYN] = useState(true);

  // // Add keyboard event listener
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [selectedIndex]);

  // 검색어에 따라 필터링된 포켓몬 목록
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.ko.includes(inputVal),
  );

  return (
    <div className="mr-2 flex w-full items-center justify-center space-x-3 sm:space-x-6">
      <div className="ml-2">
        <select
          id="countries"
          className="block rounded-md border-gray-300 px-1 py-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => changeGen(e.target.value)}
          defaultValue={"SV"}
        >
          <option value="SV">SV</option>
          <option value="SWSH">SWSH</option>
          <option value="SM">SM</option>
          <option value="XY">XY</option>
          <option value="BW">BW</option>
          <option value="DPP">DPP</option>
          <option value="ADV">ADV</option>
          <option value="GSC">GSC</option>
          <option value="RBY">RBY</option>
        </select>
      </div>
      <div className="relative z-10 w-full">
        <input
          type="text"
          value={inputVal}
          placeholder="Search"
          onFocus={(e) => autoComplete(e.target.value)}
          // 터치 이벤트 추가
          onTouchEnd={(e) => autoComplete(e.target.value)}
          onBlur={(e) => setIsHidden(true)}
          onChange={(e) => autoComplete(e.target.value)}
          onKeyDown={(e) => autoCompleteKeyEvent(e.key, e.target.value)}
          className="w-full rounded-full border bg-white px-6 py-3 shadow"
        ></input>
        <ul
          className="top-13 absolute top-14 h-64 w-full overflow-hidden overflow-y-scroll rounded bg-white p-4"
          hidden={isHidden}
        >
          {filteredPokemons?.slice(0, 20).map((pokemon, idx) => (
            <li
              className="list flex items-center space-x-3 border-b p-1.5 font-sans"
              key={idx}
              hidden={
                !pokemon.name.ko.substring(0, inputVal.length).includes(search)
              }
              onMouseOver={(e) => autoCompleteKeyEvent("MouseOver", e.target)}
              onMouseLeave={(e) => (e.target.style.background = "none")}
              onMouseDown={(e) => {
                console.log("mouse down");
                console.log(
                  "mouse down e.target.innerText:",
                  e.target.innerText,
                );
                setInputVal(e.target.innerText.replace(/\n/g, ""));
                searchPokemon(e.target.innerText.replace(/\n/g, ""));
              }}
              // 터치 이벤트 추가
              // onTouchEnd={(e) => {
              //   console.log("touch end");
              //   console.log(
              //     "touch end e.target.innerText:",
              //     e.target.innerText,
              //   );
              //   setInputVal(e.target.innerText.replace(/\n/g, ""));
              //   searchPokemon(e.target.innerText.replace(/\n/g, ""));
              // }}
            >
              <Image
                src={pokemon.image.default}
                width={40}
                height={40}
                alt={pokemon.name.en}
              />
              <p>{pokemon.name.ko}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchPokemon;
