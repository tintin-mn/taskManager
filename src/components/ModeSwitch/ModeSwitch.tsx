import { Switch } from "@headlessui/react";
import { moon, sun } from "../../assets/icon/Icons";

interface SwitchModeProps {
  onChange: (isLight: boolean) => void;
  isLight: boolean;
}

const SwitchMode: React.FC<SwitchModeProps> = ({ isLight, onChange }) => {
  return (
    <Switch
      checked={isLight}
      onChange={onChange}
      className={`${
        isLight
          ? "bg-gray-secondary justify-start"
          : "bg-gray-darker justify-end"
      } flex  h-[36px] w-[64px] cursor-pointer rounded-[8px]  duration-500 transition-colors ease-in-out `}
    >
      <span
        className={`${
          isLight ? "bg-white mr-[3px]" : "bg-gray-primary ml-[3px]"
        } h-[30px] w-[30px] mt-[3px] transform rounded-[5px] shadow-lg transition duration-500 ease-in-out flex items-center justify-center `}
      >
        <img
          src={isLight ? sun : moon}
          alt={isLight ? "Sun Icon" : "Moon Icon"}
          className="size-5"
        />
      </span>
    </Switch>
  );
};

export default SwitchMode;
