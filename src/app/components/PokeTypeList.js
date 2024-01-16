import { PokeTypeColor, PokeTypeKor } from "../types/poketypes";
function PokeTypeList({ types, lng }) {
  return (
    <div className="flex space-x-1">
      {types.map((type, idx) => (
        <div
          key={idx}
          className={`my-1 rounded-md px-2 text-center text-sm font-bold text-white ${
            lng === "ko" ? "w-16" : "w-20"
          }`}
          style={{ backgroundColor: PokeTypeColor[type] }}
        >
          {lng === "ko" ? PokeTypeKor[type] : type}
        </div>
      ))}
    </div>
  );
}

export default PokeTypeList;
