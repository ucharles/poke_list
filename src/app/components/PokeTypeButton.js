"use client";
import { useEffect, useState } from "react";
import PokeTypeIcon from "./PokeTypeIcon";

function PokeTypeButton({ type, lng, isSelected = false, setTypeResultFc }) {
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    setTypeResultFc((prev) => {
      console.log(prev);

      if (prev === undefined) {
        return [type];
      }
      if (prev.includes(type)) {
        return prev.filter((e) => e != type);
      } else {
        if (prev.length >= 3) {
          return [...prev];
        } else {
          return [...prev, type];
        }
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full border-2 rounded-lg${
        selected ? " border-gray-800" : " border-white opacity-50"
      }`}
    >
      <PokeTypeIcon type={type} lng={lng} />
    </button>
  );
}

export default PokeTypeButton;
