"use client";
import Image from "next/image";
import { useState } from "react";

// showdown 종속
// npm install @pkmn/data
// npm install @pkmn/dex
import { Dex } from "@pkmn/dex";
import { Generations } from "@pkmn/data";
import { GetPATCH, TYPE_LIST } from "./poke_data.js";
import PokeTypeIcon from "./components/PokeTypeIcon.js";

export default function test() {
  // 자동 완성 리스트 샘플

  // showdown calculator와 병합
  /*
  showdown 포켓몬 정보 : gens.get([세대]).species.get([포켓몬 영문 명]) 으로 특정 세대에서의 포켓몬 정보를 호출 가능 (타입 외에도 특성 등의 여러 정보 포함되어 있음)
  [세대]_PATCH Array를 순회하면서 showdown 포켓몬 정보 , [세대]_PATCH 포켓몬 정보를 merge 한 객체를 새로운 객체에 저장
  새로운 객체는 result Array의 요소로 추가
  */
  function CreateGenList(gen) {
    const result = [];
    const gen_list = GetPATCH(gen);
    // gen_list로 순회 >> @pkmn/data에서 가져온 포켓몬 정보 중에 showdown 자작 포켓몬 있음
    for (const key in gen_list) {
      result.push(
        Object.assign(
          {},
          gens.get(gen).species.get(gen_list[key].name.en),
          gen_list[key]
        )
      );
    }
    return result;
  }

  // 검색에 사용할 세대별 Array 생성
  const gens = new Generations(Dex);
  const RBY = CreateGenList(1);
  const GSC = CreateGenList(2);
  const ADV = CreateGenList(3);
  const DPP = CreateGenList(4);
  const BW = DPP;
  const XY = DPP;
  const SM = DPP;
  const SWSH = SM.concat(SWSH_patch);
  const SV = SWSH.concat(SV_patch);

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
        console.log(pokemons);
        break;
      case "GSC":
        setpokemons(GSC);
        console.log(pokemons);
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
      temp_type = temp_type.map((v, i) => v * TYPE_LIST[type][i]);
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

  //const [pokemons, setpokemons] = useState(SV);
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
              {/* {pokemons?.map((pokemon, idx) => (
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
              ))} */}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-2 max-w-4xl w-full items-center border-b font-mono text-sm border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8 ">
        <div className="grid grid-cols-6 justify-items-center gap-y-2">
          {/* 클릭 시 이벤트가 발생하는 버튼 컴포넌트로 만들어야 함 */}
          <PokeTypeIcon type="normal" width="50" />
          <PokeTypeIcon type="fire" width="50" />
          <PokeTypeIcon type="water" width="50" />
          <PokeTypeIcon type="grass" width="50" />
          <PokeTypeIcon type="electric" width="50" />
          <PokeTypeIcon type="ice" width="50" />
          <PokeTypeIcon type="fighting" width="50" />
          <PokeTypeIcon type="poison" width="50" />
          <PokeTypeIcon type="ground" width="50" />
          <PokeTypeIcon type="flying" width="50" />
          <PokeTypeIcon type="psychic" width="50" />
          <PokeTypeIcon type="bug" width="50" />
          <PokeTypeIcon type="rock" width="50" />
          <PokeTypeIcon type="ghost" width="50" />
          <PokeTypeIcon type="dragon" width="50" />
          <PokeTypeIcon type="dark" width="50" />
          <PokeTypeIcon type="steel" width="50" />
          <PokeTypeIcon type="fairy" width="50" />
        </div>
        <div className="items-center p-8 ">
          <div className="pb-4 w-full space-x-6 items-center border-b flex">
            <div className="font-mono text-2xl">X4</div>
            <div className="flex items-center justify-normal gap-2">
              <img
                hidden={searchYN || typeResult[0] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PvuSMZHqqYF5bQh4sITdAnPUoo0S4jBEPjvBaodNQtGPROloYolcRGHoqjbY4rTXrJIb-ZdxIIhfNLLR7hMk4Q.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 4}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                width="30"
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
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 2}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                width="30"
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
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 0.5}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                width="30"
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
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[1] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8nOpldWx5jLLBcAEFFKHHOhd4_vcw0SJzHLD9tiqeQNzp9cevirxnAaDd0EbjCfk3LVxk3oh5AMVA2vaZpLi9g.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[2] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/GcxOX2msC0JJ-ssiaJI70AN1ktJX4UD-XUxfjzRv2Z-gUvUUHxx2DOPPF6vL02PVcoOn7UFhjOHPi2MaxmN2eA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[3] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hOFwA0dZpmzHTUvsg4ptvdokqANSm7qX5s01Dy6a2BBxK8SYzvw37xuPdrlCBFNUsiDPqWntPsPfPeuJKo4WRA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[4] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/8V52U_V38m3E6iiimx1h1NSzIM8toPd2nuh9cYXbwTPCXG5qiLJ7jRGjEgIVdy5tuydh5gyNL1pcXqTXZo28gg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[5] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/cEdS9oG0iXtMyZhuFamomjJaLGR20gXmAB3U28yi4AelnF3P4etdx0tV97vPN6iLgnLBaj6ApZG69EqcwhP10Q.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[6] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uYT9A9vFWlyqYN86w3OANACZPcgpXJGuqxrgrW4qP-XYthk_N4oktsPNvgkzDnd9ystnuicuIf8RxNb1oZTSgg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[7] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/uPBrWwVYRDlpZRlF-rT5pdQ53Dy2Uzbv3MQg59_43n5d8FuEI-BYN5uq3HwX4Z9eh24LWfE-8pkcWERkMKUSDQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[8] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/eoX1h3NPRtqwEUyEAgod6J8z7JPlzP84rSeNRQ86QqQdwXVCf3Z4FWvP2-cJEF-3OufxLRVnEf2QtJfVvWYluQ.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[9] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/a1JChrvl-OxuL37fI7uC1UHKPgbxGPmG3j3_7TZ896QysGtR5cPPqyY9fZr7asNYZMLBThYK0XlbYc-86PXzqw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[10] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PDzju64FSedcuC5m3cvq-4X_pDRgkxl_ymN9-KfHmQpB4LR_PhuNSP5HvBgNrlO9yTMfbsB6suxyz_1ExK_WLg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[11] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/PqnieDvvQVHJg-DVSQfAt2uz9HcxwNbjCEO2IkppusliQQZNi1Wozx16tEPAS4avGWd9j3wtq0YVZ5Kp70gNYA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[12] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/hQxHwmMpK9JyNHHitq9xSLEtkcyQgqLYlrFq3UHiSxd_-OphyJs_YC5yvbcOhCok31gaVbURtaB_0Eup9UoTXg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[13] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/OOj_uG7ozAmaxP-E7W8mIG6SU6KwowqOlYNURQ4hulaT3oKVaiMrjoxK1Ox1k8oTUY6YKLsQgVmBURAhvnvPnw.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[14] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/N0N6QlMWx3TRhx3g1jcHCU-g8Hp6Ih58MoN6lnEnzTIX0bcOxw-S7RxdF5rMQfsSNimgv-wxL0_1OpXHaknxmA.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[15] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/6tKSV0yEIOdKNKblkkcwRN8fmElmRfmUrRXeqdHwJ1lq0k6td0hR0DPeCpUxLP1X_G0w3dy9WfZl7_q_dvMk8w.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[16] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/80YtbGPxyMBVuBbcCjM4XcLlDW9tuPho4LJOqez0PqsjqPrt-6_W3GGhU1g4FRAjlEjoG86n7vThUs4FwWz_mg.svg"
                width="30"
              ></img>
              <img
                hidden={searchYN || typeResult[17] != 0.25}
                class="h-auto  mx-auto"
                src="https://i.namu.wiki/i/x7VCJZDXPWSpxERLBpuMGtg4DJg-QnqjGBOo-DEb3f4aypDTPsBaQqOrLZaJ4TomgUpxjg6omo7ZcjR00kbFMw.svg"
                width="30"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
