import React, { useState } from "react";
import Buttons from "../../components/basicComponents/Button";
import ColorCheckboxesList from "../../components/checkbox/ChekboxColorList";
import DarkLightSwitch from "../../components/DarkAndLightModeSwitch/DarkAndLightModeSwitch";
//
const SettingProfile: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string | null) => {
    setSelectedColor(color);
  };

  return (
    <form className="h-[252px]">
      <h1 className="text-right text-2xl font-bold mb-8">تنظیمات</h1>
      <span className="mb-2 text-[14px]">انتخاب تم</span>
      <ColorCheckboxesList
        className="mt-2 mb-2"
        onColorChange={handleColorChange}
      />
      <DarkLightSwitch />
      <Buttons
        type="submit"
        classNames={`mt-6 w-[354px] h-10 ${
          selectedColor
            ? `${selectedColor} hover:${selectedColor}/90`
            : "bg-brand-500 hover:bg-brand-500/90"
        }  text-white font-semibold shadow-inner shadow-white/10 focus:outline-none`}
      >
        ثبت تغییرات
      </Buttons>
    </form>
  );
};

export default SettingProfile;
