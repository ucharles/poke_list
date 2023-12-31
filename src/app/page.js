"use client";
import { useState, useEffect } from "react";

// showdown 종속
// npm install @pkmn/data
// npm install @pkmn/dex
import PokeTypeSelectButtonList from "./components/PokeTypeSelectButtonList.js";
import CalculatedTypeResult from "./components/CalculatedTypeResult.js";

import SearchPokemon from "./components/SearchPokemon.js";

export default function test() {
  const [searchResult, setSearchResult] = useState({});
  const [typeResult, setTypeResult] = useState([]);

  // 이 코드가 모바일에서 동작을 안하는 듯 함
  useEffect(() => {
    console.log(searchResult);
    setTypeResult(searchResult?.types);
  }, [searchResult]);

  return (
    <main className="m-auto max-w-3xl font-mono text-sm">
      <div className="flex w-full items-center justify-center space-x-6 bg-gray-600 px-1 py-2 text-sm sm:px-2 sm:py-4">
        <SearchPokemon setResultFc={setSearchResult} />
      </div>
      <div className="w-full items-center text-sm sm:py-2">
        <PokeTypeSelectButtonList
          typeResult={typeResult}
          setTypeResultFc={setTypeResult}
          className="px-1 pt-1 sm:pt-0"
        />
        <div className="my-2 border sm:my-3"></div>
        <CalculatedTypeResult typeResult={typeResult} className="px-1" />
      </div>
      <div></div>
    </main>
  );
}
