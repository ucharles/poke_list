"use client"
import { useState } from "react";

export default function test() {
  
  function setinputType_(type) {
    const newinputtypes = inputtype.map((c, i) => {
      if (i === type[0] || i === type[1] ) {
        return 1;
      } else {
        return 0;
      }
    });

    setinputType(newinputtypes)
  }

  function setType_(num) {
    let newtypes;
    if (types[0] === -1 && types[1] !== num) {
      newtypes = types.map((c, i) => {
        if (i === 0 ) {
          return num;
        } else{
          return c;
        }
      });

      setType(newtypes);
    }
    else if (types[0] === num || types[1] === num) {
      newtypes = types.map((c, i) => {
        if (c === num) {
          return -1;
        } else{
          return c;
        }
      });

      setType(newtypes);
    }
    else if (types[0] !== num) {
      newtypes = types.map((c, i) => {
        if (i === 1 ) {
          return num;
        } else{
          return c;
        }
      });

      setType(newtypes);
    }
    else {
      newtypes = types;
    }

    setinputType_(newtypes);
  }
  const [types, setType] = useState([-1,-1]);
  const [inputtype, setinputType] = useState([0,0,0,0])
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24 bg-gray-800">
      <div className="max-w-4xl w-full space-x-6 items-center border-b justify-center font-mono text-sm flex border-b border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8 ">
      {types} :
      {inputtype}<br></br>
      <div className="grid grid-cols-6 gap-4 flex items-center justify-center text-sm">
        
        <label>
          <input class="sr-only peer" name="normal" type="radio" value="Normal" onClick={(e)=>setType_(0)} checked={inputtype[0]} />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            normal
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="fire" type="radio" value="Fire" onClick={(e)=>setType_(1)} checked={inputtype[1]} />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-red-400 peer-checked:font-semibold peer-checked:bg-red-600 peer-checked:text-white">
            fire
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="water" type="radio" value="Water" onClick={(e)=>setType_(2)} checked={inputtype[2]}/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-blue-400 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
            water
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="grass" type="radio" value="Grass" onClick={(e)=>setType_(3)} checked={inputtype[3]}/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-green-400 peer-checked:font-semibold peer-checked:bg-green-600 peer-checked:text-white">
            glass
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="4" type="radio" value="xl" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            1
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size5" type="radio" value="xl" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            1
          </div>
        </label>
      </div>
      </div>
    </main>
  )
}
