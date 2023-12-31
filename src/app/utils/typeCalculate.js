import { PokeTypeList } from "../types/poketypes.js";

export function formatTypeArray(typeArray) {
  let temp = {};
  typeArray?.map((value, idx) => {
    if (value !== 1) {
      switch (value) {
        case 8:
          temp["×8"] = [...(temp["×8"] || []), PokeTypeList[idx]];
          break;
        case 4:
          temp["×4"] = [...(temp["×4"] || []), PokeTypeList[idx]];
          break;
        case 2:
          temp["×2"] = [...(temp["×2"] || []), PokeTypeList[idx]];
          break;
        case 0.5:
          temp["÷2"] = [...(temp["÷2"] || []), PokeTypeList[idx]];
          break;
        case 0.25:
          temp["÷4"] = [...(temp["÷4"] || []), PokeTypeList[idx]];
          break;
        case 0.125:
          temp["÷8"] = [...(temp["÷8"] || []), PokeTypeList[idx]];
          break;
        case 0:
          temp["0"] = [...(temp["0"] || []), PokeTypeList[idx]];
          break;
      }
    }
  });
  return temp;
}
