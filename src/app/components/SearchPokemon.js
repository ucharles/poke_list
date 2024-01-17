// SelectGeneration에서 선택된 값에 따라 검색 범위가 달라짐.
// library
import { useState, useEffect, useMemo, useRef } from "react";
import { calculate, Generations, Pokemon, Move } from "@smogon/calc";
import Image from "next/image";

// component

// util
import { createGenList } from "../utils/generationFunction";

function SearchPokemon({ setResultFc }) {
  // 검색에 사용할 세대별 Array 생성
  const RBY = createGenList(1);
  const GSC = createGenList(2);
  const ADV = createGenList(3);
  const DPP = createGenList(4);
  const BW = createGenList(5);
  const XY = createGenList(6);
  const SM = createGenList(7);
  const SWSH = createGenList(8);
  const SV = SWSH;

  // 세대 선택 시 포켓몬 리스트 교체
  function changeGen(str) {
    switch (str) {
      case "RBY":
        setPokemons(RBY);
        setGens(1);
        break;
      case "GSC":
        setPokemons(GSC);
        setGens(2);
        break;
      case "ADV":
        setPokemons(ADV);
        setGens(3);
        break;
      case "DPP":
        setPokemons(DPP);
        setGens(4);
        break;
      case "BW":
        setPokemons(BW);
        setGens(5);
        break;
      case "XY":
        setPokemons(XY);
        setGens(6);
        break;
      case "SM":
        setPokemons(SM);
        setGens(7);
        break;
      case "SWSH":
        setPokemons(SWSH);
        setGens(8);
        break;
      case "SV":
        setPokemons(SV);
        setGens(9);
        break;
      default:
        setPokemons(SV);
        setGens(9);
    }
  }

  function autoComplete(str) {
    setInputVal(str);
    setSearch(str);
    setIsHidden(false);
  }

  // 자동 완성 리스트 키 및 마우스 조작 이벤트
  // function autoCompleteKeyEvent(key, target = null) {
  //   let temp = document.getElementsByClassName("list");
  //   let list = [];
  //   let index = -1;
  //   for (const l of temp) {
  //     if (l.getAttribute("hidden") === null) {
  //       list.push(l);
  //       if (l.style.background === "yellow") {
  //         index = list.length - 1;
  //       }
  //     }
  //   }
  //   switch (key) {
  //     case "MouseOver":
  //       for (const l of list) {
  //         l.style.background = "none";
  //       }
  //       target.style.background = "yellow";
  //       break;
  //     case "ArrowDown":
  //       if (index != -1 && index + 1 < list.length) {
  //         list[index].style.background = "none";
  //       }
  //       if (index + 1 != list.length) {
  //         list[index + 1].style.background = "yellow";
  //       }
  //       break;

  //     case "ArrowUp":
  //       if (index - 1 > -1) {
  //         list[index - 1].style.background = "yellow";
  //       }
  //       if (index > 0 && index != list.length) {
  //         list[index].style.background = "none";
  //       }
  //       break;

  //     case "Enter":
  //       // Enter 이후 검색할 문자열 저장
  //       let searchVal = target;
  //       if (index !== -1) {
  //         setInputVal(list[index].innerText);
  //         list[index].style.background = "none";
  //         // 자동 검색 리스트에서 선택한 것이 있을 경우 문자열 변경
  //         searchVal = list[index].innerText;
  //       }
  //       document.activeElement.blur();
  //       // 포켓몬 검색
  //       searchPokemon(searchVal);
  //       console.log("enter");
  //       console.log("enter e.target.innerText:", searchVal);

  //       break;
  //   }
  // }

  // 포켓몬 검색
  function searchPokemon(str) {
    let searchPokemon;
    // 검색되는게 있으면
    if ((searchPokemon = pokemons.find((e) => e.name.ko === str))) {
      //20240117 @smogon/calc species 와의 병합을 여기서 수행
      //searchPokemon 순회 >> @smogon/calc에서 가져온 포켓몬 정보 중에 showdown 자작 포켓몬 있음
      searchPokemon= Object.assign(
        {},
        new Pokemon(Generations.get(gens), searchPokemon.name.en),
        searchPokemon
      )

      console.log("Search pokemon:", searchPokemon);
      setResultFc(searchPokemon);
      setSearchYN(false);
    }
  }

  const [pokemons, setPokemons] = useState(SV);
  const [gens , setGens] = useState(9);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [searchYN, setSearchYN] = useState(true);
  const pokemonSearchListRef = useRef(null);

  // 검색어에 따라 필터링된 포켓몬 목록
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.ko.includes(inputVal),
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      const list = pokemonSearchListRef.current;
      const liElements = pokemonSearchListRef.current.querySelectorAll("li");
      const key = e.key;
      const itemHeight = 54;
      const minIndexToScroll = 2;
      const scrollPosition = (selectedIndex - minIndexToScroll) * itemHeight;

      switch (key) {
        case "ArrowUp":
          if (isHidden) {
            setIsHidden(false);
            break;
          }
          if (list) {
            if (selectedIndex > 0) {
              setSelectedIndex((prev) => prev - 1);
            }
            list.scrollTo(0, scrollPosition - itemHeight);
          }
          break;
        case "ArrowDown":
          if (isHidden) {
            setIsHidden(false);
            break;
          }
          if (list) {
            if (selectedIndex < liElements.length - 1) {
              setSelectedIndex((prev) => prev + 1);
            }
            if (selectedIndex >= minIndexToScroll) {
              list.scrollTo(0, scrollPosition);
            }
          }
          break;
        case "Escape":
          if (!isHidden) {
            setIsHidden(true);
          }
          break;
        case "Enter":
          if (isHidden) {
            setIsHidden(false);
            break;
          }
          if (list) {
            setIsHidden(true);
            setSelectedIndex(0);
            setInputVal(filteredPokemons[selectedIndex].name.ko);
            searchPokemon(filteredPokemons[selectedIndex].name.ko);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredPokemons, isHidden, inputVal]);

  // useEffect(() => {
  //   const list = pokemonSearchListRef.current;
  //   if (list) {
  //     const itemHeight = 43;
  //     const scrollPosition = selectedIndex * itemHeight;

  //     list.scrollTo(0, scrollPosition);
  //   }
  // }, [selectedIndex]); // selectedIndex가 변경될 때마다 실행

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
          type="search"
          value={inputVal}
          placeholder="Search"
          onFocus={(e) => autoComplete(e.target.value)}
          onBlur={(e) => {
            setIsHidden(true);
            setSelectedIndex(0);
          }}
          onChange={(e) => autoComplete(e.target.value)}
          className="w-full rounded-full border bg-white px-5 py-2 text-base shadow"
        ></input>
        <ul
          className="pokemon-search-list top-13 absolute top-14 h-64 w-full overflow-hidden overflow-y-scroll rounded bg-white p-4"
          hidden={isHidden}
          ref={pokemonSearchListRef}
        >
          {filteredPokemons?.slice(0, 20).map((pokemon, idx) => (
            <li
              className={`${
                idx === selectedIndex ? "bg-blue-200" : "bg-transparent"
              } list flex items-center space-x-3 border-b p-1.5`}
              key={idx}
              hidden={
                !pokemon.name.ko.substring(0, inputVal.length).includes(search)
              }
              onMouseOver={() => setSelectedIndex(idx)}
              onMouseLeave={() => setSelectedIndex(0)}
              onMouseDown={() => {
                setInputVal(pokemon.name.ko);
                searchPokemon(pokemon.name.ko);
                setIsHidden(true);
              }}
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
