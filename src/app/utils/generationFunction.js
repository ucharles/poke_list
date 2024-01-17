import { GetPATCH } from "../poke_data.js";

/*
  showdown 포켓몬 정보 : gens.get([세대]).species.get([포켓몬 영문 명]) 으로 특정 세대에서의 포켓몬 정보를 호출 가능 (타입 외에도 특성 등의 여러 정보 포함되어 있음)
  [세대]_PATCH Array를 순회하면서 showdown 포켓몬 정보 , [세대]_PATCH 포켓몬 정보를 merge 한 객체를 새로운 객체에 저장
  새로운 객체는 result Array의 요소로 추가
*/
export function createGenList(gen) {
  const result = GetPATCH(gen);
  // 20240117 @smogon/calc 병합 삭제 -> 병합 로직 SearchPokemon.js로 이전

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