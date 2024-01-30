"use client";
import { useState, useEffect } from "react";

// showdown 종속
// npm install @pkmn/data
// npm install @pkmn/dex
import PokeTypeSelectButtonList from "./components/PokeTypeSelectButtonList.js";
import CalculatedTypeResult from "./components/CalculatedTypeResult.js";

import Patchnote from "./components/Patchnote";
import SearchPokemon from "./components/SearchPokemon.js";
import SelectedPokeInfo from "./components/SelectedPokeInfo.js";
import Footer from "./components/Footer.js";

export default function Page() {
  const [searchResult, setSearchResult] = useState({});
  const [typeResult, setTypeResult] = useState([]);
  const [isPatchnoteOpen, setIsPatchnoteOpen] = useState(true);
  const lng = "ko";

  useEffect(() => {
    console.log(searchResult);
    setTypeResult(searchResult?.types);
  }, [searchResult]);

  // typeResult가 처음 변경되었을 때 패치노트를 닫고, 다시 열지 않음
  useEffect(() => {
    if (typeResult?.length > 0) {
      setIsPatchnoteOpen(false);
    }
  }, [typeResult]);

  return (
    <div className="m-auto flex min-h-screen max-w-3xl flex-col text-sm">
      <header className="flex w-full items-center justify-center space-x-6 bg-gray-600 px-1 py-2 text-sm sm:px-2 sm:py-4">
        <SearchPokemon setResultFc={setSearchResult} />
      </header>
      <main>
        <div>
          <SelectedPokeInfo searchedPokemon={searchResult} lng={lng} />
        </div>
        <div className="mb-1 border"></div>
        <div className="w-full flex-grow items-center text-sm sm:py-2">
          <PokeTypeSelectButtonList
            typeResult={typeResult}
            setTypeResultFc={setTypeResult}
            className="px-2 pt-1 sm:pt-0"
            lng={lng}
          />
          <div className="my-2 border sm:my-3"></div>
          <Patchnote className={`px-2 ${isPatchnoteOpen ? "" : "hidden"}`} />

          <CalculatedTypeResult
            typeResult={typeResult}
            className="mb-10 px-2"
            lng={lng}
          />
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
