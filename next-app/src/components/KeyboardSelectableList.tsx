"use client";
import React, { useState, useEffect } from "react";

interface KeyboardSelectableListProps {
  items: string[];
}

function KeyboardSelectableList({ items }: KeyboardSelectableListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");

  function autocomplete(str: string) {
    setInputVal(str);
    setSearch(str);
    setIsHidden(false);
  }

  // Handle keyboard input
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setInputVal(items[selectedIndex - 1]);
    } else if (e.key === "ArrowDown" && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setInputVal(items[selectedIndex + 1]);
    } else if (e.key === "Enter") {
      setInputVal(items[selectedIndex]);
      setIsHidden(true);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <React.Fragment>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => autocomplete(e.target.value)}
        onFocus={(e) => autocomplete(e.target.value)}
        onBlur={(e) => {
          setIsHidden(true);
          setSelectedIndex(0);
        }}
        className="border-2 border-gray-500 p-2"
      />
      <ul hidden={isHidden}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${
              index === selectedIndex ? "bg-blue-400" : "bg-transparent"
            } p-2`}
            hidden={
              search !== "" &&
              !item.toLowerCase().startsWith(search.toLowerCase())
            }
            onMouseOver={() => setSelectedIndex(index)}
            onMouseDown={() => {
              setInputVal(item);
              setIsHidden(true);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default KeyboardSelectableList;
