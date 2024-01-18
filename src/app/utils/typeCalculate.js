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
          temp["X"] = [...(temp["X"] || []), PokeTypeList[idx]];
          break;
      }
    }
  });
  return temp;
}

export function sortTypeResultArray(data, order = true) {
  const SORT_ORDER = ["×8", "×4", "×2", "÷2", "÷4", "÷8", "X"];

  const orderedSortOrder = order ? SORT_ORDER : SORT_ORDER.slice().reverse();
  const temp = {};

  orderedSortOrder.forEach((key) => {
    const strKey = String(key);
    if (data.hasOwnProperty(strKey)) {
      temp[strKey] = data[strKey];
    }
  });

  return temp;
}
