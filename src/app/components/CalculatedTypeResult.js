import { useState, useEffect } from "react";
import { TYPE_LIST } from "../poke_data.js";
import {
  formatTypeArray,
  sortTypeResultArray,
} from "../utils/typeCalculate.js";
import PokeTypeIcon from "./PokeTypeIcon.js";

function CalculatedTypeResult({ typeResult, className, lng }) {
  function calculateType(types) {
    if (types === undefined) return;

    let tempType = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (let type of types) {
      tempType = tempType.map((v, i) => v * TYPE_LIST[type][i]);
    }
    return tempType;
  }

  const [calculateTypeResult, setCalculateTypeResult] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const [formatTypeResult, setFormatTypeResult] = useState({});

  useEffect(() => {
    setCalculateTypeResult(calculateType(typeResult));
  }, [typeResult]);

  useEffect(() => {
    setFormatTypeResult(
      sortTypeResultArray(formatTypeArray(calculateTypeResult)),
    );
  }, [calculateTypeResult]);

  return (
    <div className={className}>
      <div className="space-y-3">
        {Object.keys(formatTypeResult).map((key, idx) => {
          return (
            <div key={idx} className="flex space-x-4">
              <div className="grid w-full grid-cols-5 gap-x-1 gap-y-1 xs:grid-cols-6 xs:gap-x-2">
                <div className="row-span-2 flex items-center justify-center rounded-lg bg-slate-200 text-2xl">
                  {key}
                </div>
                {formatTypeResult[key].map((value, idx) => {
                  return <PokeTypeIcon key={idx} type={value} lng={lng} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalculatedTypeResult;
