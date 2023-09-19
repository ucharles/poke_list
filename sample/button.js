"use client"
import { useState } from "react";

export default function test() {
  
  function calcType(type) {
    console.log(type);
    const calc_list = [[1,1,1,1],[1,0.5,0.5,2],[1,2,0.5,0.5],[1,0.5,2,0.5]];
    let result = [1,1,1,1]
    for (const t of type) {
      if (t !== -1) {
        for (const r in result) {
          result[r] = result[r] * calc_list[t][r]
        }
      }
    }

    setresultType(result);
  }

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
        if (i === 0) {
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
        if (i === 1) {
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

    calcType(newtypes);
    setinputType_(newtypes);
  }
  const [types, setType] = useState([-1,-1]);
  const [inputtype, setinputType] = useState([0,0,0,0])
  const [resulttype, setresultType] = useState([0,0,0,0])
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24 bg-gray-800">
      <div className="max-w-4xl w-full space-x-6 items-center border-b justify-center font-mono text-sm grid grid-cols-1 gap-12 border-b border-gray-300 dark:from-inherit rounded-xl border bg-gray-200 p-8 ">
      {types} :
      {inputtype} : {resulttype}<br></br>
      <div className="grid grid-cols-6 gap-4 flex items-center justify-center text-sm">
        
        <label>
          <input class="sr-only peer" name="0" type="radio" value="Normal" onClick={(e)=>setType_(0)} checked={inputtype[0]} />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            0
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="1" type="radio" value="Fire" onClick={(e)=>setType_(1)} checked={inputtype[1]} />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-red-400 peer-checked:font-semibold peer-checked:bg-red-600 peer-checked:text-white">
            1
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="2" type="radio" value="Water" onClick={(e)=>setType_(2)} checked={inputtype[2]}/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-blue-400 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
            2
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="3" type="radio" value="Grass" onClick={(e)=>setType_(3)} checked={inputtype[3]}/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-green-400 peer-checked:font-semibold peer-checked:bg-green-600 peer-checked:text-white">
            3
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="4" type="radio" value="xl" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            4
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="5" type="radio" value="xl" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            5
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="6" type="radio" value="test" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            6
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="7" type="radio" value="test" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            7
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="8" type="radio" value="test"/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            8
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="9" type="radio" value="test"/>
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            9
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="10" type="radio" value="test" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            10
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="11" type="radio" value="test" />
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            11
          </div>
        </label>
      </div>

      <table class="table-fix">
  <thead>
    <tr>
      <th class="w-4">x</th>
      <th>types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8</td>
      <td class="flex gap-2 items-center justify-center">
        <div class={`${resulttype[0] !== 8 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>0</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">2</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">3</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">4</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">5</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">6</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">7</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">8</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">9</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">10</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">11</div>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td class="flex gap-2 items-center justify-center">
        <div class={`${resulttype[0] !== 4 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>0</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">2</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">3</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">4</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">5</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">6</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">7</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">8</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">9</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">10</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">11</div>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td class="flex gap-2 items-center justify-center">
        <div class={`${resulttype[0] !== 2 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>0</div>
        <div class={`${resulttype[1] !== 2 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-red-600 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>1</div>
        <div class={`${resulttype[2] !== 2 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-blue-600 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>2</div>
        <div class={`${resulttype[3] !== 2 ? 'hidden' : '1'} rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-green-600 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>3</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">5</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">6</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">7</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">8</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">9</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">10</div>
        <div class="hidden rounded-full w-6 h-6 flex items-center justify-center text-slate-700 bg-slate-400 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">11</div>
      </td>
    </tr>
  </tbody>
</table>

      </div>

    </main>
  )
}
