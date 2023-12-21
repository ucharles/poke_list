"use client";
import { useState } from "react";

export default function test() {
  // 자동 완성 리스트 샘플

  // 세대별 포켓몬 리스트 예제 https://github.com/limelee85/poke_list/issues/5 이슈로 인해 바꿔야함
  const RBY = [
    {
      name: {
        ko: "캐이시",
        en: "Abra",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/63.png",
      },
      types: ["Psychic"],
      bs: {
        hp: 25,
        at: 20,
        df: 15,
        sp: 90,
        sl: 105,
      },
      weightkg: 19.5,
      nfe: true,
    },
    {
      name: {
        ko: "주뱃",
        en: "Zubat",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/41.png",
      },
      types: ["Poison", "Flying"],
      bs: {
        hp: 40,
        at: 45,
        df: 35,
        sp: 55,
        sl: 40,
      },
      weightkg: 7.5,
      nfe: true,
    },
  ];

  const GSC_patch = [
    {
      name: {
        ko: "에이팜",
        en: "Aipom",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/190.png",
      },
      types: ["Normal"],
      bs: {
        hp: 55,
        at: 70,
        df: 55,
        sa: 40,
        sd: 55,
        sp: 85,
      },
      weightkg: 11.5,
    },
    {
      name: {
        ko: "왕자리",
        en: "Yanma",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/193.png",
      },
      types: ["Bug", "Flying"],
      bs: {
        hp: 65,
        at: 65,
        df: 45,
        sa: 75,
        sd: 45,
        sp: 95,
      },
      weightkg: 38,
    },
  ];

  const SWSH_patch = [
    {
      name: {
        ko: "자시안-검왕",
        en: "Zacian-Crowned",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10188.png",
      },
      types: ["Fairy", "Steel"],
      bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
      weightkg: 355,
      abilities: { 0: "Intrepid Sword" },
      baseSpecies: "Zacian",
      gender: "N",
    },
  ];

  const SV_patch = [
    {
      name: {
        ko: "코라이돈",
        en: "Koraidon",
      },
      image: {
        default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
        shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1007.png",
      },
      types: ["Fighting", "Dragon"],
      bs: { hp: 100, at: 135, df: 115, sa: 85, sd: 100, sp: 135 },
      weightkg: 303,
      gender: "N",
      abilities: { 0: "Orichalcum Pulse" },
    },
  ];

  const GSC = RBY.concat(GSC_patch);
  const ADV = GSC;
  const DPP = GSC;
  const BW = GSC;
  const XY = GSC;
  const SM = GSC;
  const SWSH = SM.concat(SWSH_patch);
  const SV = SWSH.concat(SV_patch);

  // type 에 대한 정의
  const type_list = {
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
    Normal: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    Fire: [1, 0.5, 2, 0.5, 1, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5],
    Water: [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
    Grass: [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1],
    Electric: [1, 1, 1, 1, 0.5, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1],
    Ice: [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    Fighting: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2],
    Poison: [1, 1, 1, 0.5, 1, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5],
    Ground: [1, 1, 2, 2, 0, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
    Flying: [1, 1, 1, 0.5, 2, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1],
    Psychic: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1],
    Bug: [1, 2, 1, 0.5, 1, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1],
    Rock: [0.5, 0.5, 2, 2, 1, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1],
    Ghost: [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
    Dragon: [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    Dark: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
    Steel: [
      0.5, 2, 1, 0.5, 1, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5,
    ],
    Fairy: [1, 1, 1, 1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 1, 0, 0.5, 2, 1],
  };

  // input에 값이 변경되었을 때 ul,li 조작
  function autocomplete(str) {
    setInputVal(str);
    setSearch(str);
    setIsHidden(false);
  }

  // 세대 선택 시 포켓몬 리스트 교체
  function changeGen(str) {
    switch (str) {
      case "RBY":
        setpokemons(RBY);
        break;
      case "GSC":
        setpokemons(GSC);
        break;
      case "ADV":
        setpokemons(ADV);
        break;
      case "DPP":
        setpokemons(DPP);
        break;
      case "BW":
        setpokemons(BW);
        break;
      case "XY":
        setpokemons(XY);
        break;
      case "SM":
        setpokemons(SM);
        break;
      case "SWSH":
        setpokemons(SWSH);
        break;
      case "SV":
        setpokemons(SV);
        break;
      default:
        setpokemons(SV);
    }
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
        // Enter 이후 검색할 문자열 저장
        let search_val = target;
        if (index != -1) {
          setInputVal(list[index].innerText);
          list[index].style.background = "none";
          // 자동 검색 리스트에서 선택한 것이 있을 경우 문자열 변경
          search_val = list[index].innerText;
        }
        document.activeElement.blur();
        // 포켓몬 검색
        search_pokemon(search_val);
        break;
    }
  }

  function Calculatetype(types) {
    let temp_type = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (let type of types) {
      temp_type = temp_type.map((v, i) => v * type_list[type][i]);
    }
    settypeResult(temp_type);
  }

  // 포켓몬 검색
  function search_pokemon(str) {
    let search_pokemon;
    // 검색되는게 있으면
    if ((search_pokemon = pokemons.find((e) => e.name.ko == str))) {
      // 이후 이런저런거 하기
      //console.log(search_pokemon.types);
      setSearchYN(false);
      Calculatetype(search_pokemon.types);
    }
  }

  const [pokemons, setpokemons] = useState(SV);
  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [typeResult, settypeResult] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const [searchYN, setSearchYN] = useState(true);
  return (
    <main className="min-h-screen flex flex-col items-center p-24 bg-gray-800">
      <div className="my-2 max-w-4xl w-full space-x-6 items-center border-b justify-center font-mono text-sm flex border-b border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8 ">
        <div className="w-full space-x-6 items-center border-b justify-center font-mono text-sm flex">
          <div>
            <select
              id="countries"
              class="bg-gray-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => changeGen(e.target.value)}
            >
              <option value="SV" selected>
                SV
              </option>
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
          <div className="w-full relative ">
            <input
              type="text"
              value={inputVal}
              placeholder="test"
              onFocus={(e) => autocomplete(e.target.value)}
              onBlur={(e) => setIsHidden(true)}
              onChange={(e) => autocomplete(e.target.value)}
              onKeyDown={(e) => autocomplete_keyevent(e.key, e.target.value)}
              className="bg-white shadow rounded-full p-4 w-full"
            ></input>
            <ul
              className="absolute top-14 w-full top-13 bg-white p-4 rounded"
              hidden={isHidden}
            >
              {pokemons.map((pokemon, idx) => (
                <li
                  className="border-b p-1.5 font-sans list"
                  key={idx}
                  hidden={
                    !pokemon.name.ko
                      .substring(0, inputVal.length)
                      .includes(search)
                  }
                  onMouseOver={(e) =>
                    autocomplete_keyevent("MouseOver", e.target)
                  }
                  onMouseLeave={(e) => (e.target.style.background = "none")}
                  onMouseDown={(e) => {
                    setInputVal(e.target.innerText);
                    search_pokemon(e.target.innerText);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {pokemon.name.ko}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-2 max-w-4xl w-full items-center border-b font-mono text-sm border-b border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8 ">
        <div className="columns-6 items-center p-8">
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
            alt=""
            width="50"
            height="24"
          ></img>
          <img
            class="h-auto  mx-auto"
            src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
            alt=""
            width="50"
            height="24"
          ></img>
        </div>
        <div className="items-center p-8 ">
          <div className="pb-4 w-full space-x-6 items-center border-b flex">
            <div className="font-mono text-2xl">X4</div>
            <div className="flex items-center justify-normal gap-2">
              <img
                hidden={searchYN || typeResult[0] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
            </div>
          </div>
          <div className="pb-4 w-full space-x-6 items-center border-b flex">
            <div className="font-mono text-2xl">X2</div>
            <div className="flex items-center justify-normal gap-2">
              <img
                hidden={searchYN || typeResult[0] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
            </div>
          </div>
          <div className="pb-4 w-full space-x-6 items-center border-b flex">
            <div className="font-mono text-2xl">/2</div>
            <div className="flex items-center justify-normal gap-2">
              <img
                hidden={searchYN || typeResult[0] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
            </div>
          </div>
          <div className="pb-4 w-full space-x-6 items-center border-b flex">
            <div className="font-mono text-2xl">/4</div>
            <div className="flex items-center justify-normal gap-2">
              <img
                hidden={searchYN || typeResult[0] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                alt=""
                width="30"
                height="24"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                alt=""
                width="30"
                height="24"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
