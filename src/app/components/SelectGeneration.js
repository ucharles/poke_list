function SelectGeneration(geneState) {
  return (
    <div>
      <select
        id="countries"
        className="block w-full rounded-lg bg-gray-200 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={(e) => changeGen(e.target.value)}
      >
        <option value="SV" selected>
          SV
        </option>
        <option value="SWSH">SWSH</option>
        <option value="SM">SM</option>
        <option value="XY">XY</option>
        <option value="BW">BW</option>
        <option value="DPP">DPP</option>
        <option value="ADV">ADV</option>
        <option value="GSC">GSC</option>
        <option value="RBY">RBY</option>
      </select>
    </div>
  );
}

export default SelectGeneration;
