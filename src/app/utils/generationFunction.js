import { GetPATCH } from "../poke_data.js";
import { calculate, Generations, Pokemon, Move } from "@smogon/calc";

/*
  showdown 포켓몬 정보 : gens.get([세대]).species.get([포켓몬 영문 명]) 으로 특정 세대에서의 포켓몬 정보를 호출 가능 (타입 외에도 특성 등의 여러 정보 포함되어 있음)
  [세대]_PATCH Array를 순회하면서 showdown 포켓몬 정보 , [세대]_PATCH 포켓몬 정보를 merge 한 객체를 새로운 객체에 저장
  새로운 객체는 result Array의 요소로 추가
*/
export function createGenList(gen) {
  const result = [];
  const gen_list = GetPATCH(gen);
  // gen_list로 순회 >> @smogon/calc에서 가져온 포켓몬 정보 중에 showdown 자작 포켓몬 있음
  for (const key in gen_list) {
    result.push(
      Object.assign(
        {},
        new Pokemon(Generations.get(gen), gen_list[key].name.en),
        gen_list[key]
      )
    );
  }

  result.sort((a, b) => {
    if (a.name.ko < b.name.ko) {
      return -1;
    }
    if (a.name.ko > b.name.ko) {
      return 1;
    }
    return 0;
  });

  return result;
}
