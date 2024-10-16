import React, { useState } from "react";
import SwitchMode from "../ModeSwitch/ModeSwitch";

const DarkLightSwitch: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleModeChange = (isLight: boolean) => {
    setIsLightMode(isLight);
    console.log(isLight ? "تم روشن" : "تم تاریک");
  };

  return <SwitchMode isLight={isLightMode} onChange={handleModeChange} />;
};

export default DarkLightSwitch;
