// type
import { PokeTypeList } from "../types/poketypes";

// component
import PokeTypeButton from "./PokeTypeButton";

function PokeTypeSelectButtonList({
  lng,
  typeResult,
  setTypeResultFc,
  className,
}) {
  return (
    <div className={className}>
      <div className="grid grid-cols-5 justify-items-center gap-x-1 gap-y-1 xs:grid-cols-6">
        {PokeTypeList.map((type, idx) => (
          <PokeTypeButton
            key={idx}
            type={type}
            lng={lng}
            isSelected={typeResult?.includes(type)}
            setTypeResultFc={setTypeResultFc}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeTypeSelectButtonList;
