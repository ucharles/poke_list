"use client";
import { useState } from "react";

export default function test() {
  // 자동 완성 리스트 샘플
  const pokemons = [
    { name: "test12", engname: "pikachu" },
    { name: "test13" },
    { name: "test14" },
    { name: "est33" },
    { name: "estt15" },
    { name: "estttttt12444" },
  ];

  // input에 값이 변경되었을 때 ul,li 조작
  function autocomplete(str) {
    setInputVal(str);
    setSearch(str);
    setIsHidden(false);
  }

  // 자동 완성 리스트 키 및 마우스 조작 이벤트
  function autocomplete_keyevent(key, target = null) {
    let temp = document.getElementsByClassName("list");
    let list = [];
    let index = -1;
    for (const l of temp) {
      if (l.getAttribute("hidden") == null) {
        list.push(l);
        if (l.style.background == "yellow") {
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
        if (index != -1) {
          setInputVal(list[index].innerText);
          list[index].style.background = "none";
        }
        document.activeElement.blur();
        break;
    }
  }

  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24 bg-gray-800">
      <div className="max-w-4xl w-full space-x-6 items-center justify-center font-mono text-sm flex border-b border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8">
        <div className="w-full space-x-6 items-center border-b justify-center font-mono text-sm flex">
          <img
            class="h-auto rounded-full mx-auto"
            src="/test.png"
            alt=""
            width="50"
            height="24"
          ></img>
          <div className="w-full relative ">
            <input
              type="text"
              value={inputVal}
              placeholder="test"
              onFocus={(e) => autocomplete(e.target.value)}
              onBlur={(e) => setIsHidden(true)}
              onChange={(e) => autocomplete(e.target.value)}
              onKeyDown={(e) => autocomplete_keyevent(e.key)}
              className="bg-white shadow rounded-full p-4 w-full"
            ></input>
            <ul
              className="absolute top-14 w-full bg-white p-4"
              hidden={isHidden}
            >
              {pokemons.map((pokemon, idx) => (
                <li
                  className="border-b p-1.5 font-sans list"
                  key={idx}
                  hidden={
                    !pokemon.name.substring(0, inputVal.length).includes(search)
                  }
                  onMouseOver={(e) =>
                    autocomplete_keyevent("MouseOver", e.target)
                  }
                  onMouseLeave={(e) => (e.target.style.background = "none")}
                  onMouseDown={(e) => setInputVal(e.target.innerText)}
                  style={{ cursor: "pointer" }}
                >
                  {pokemon.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
