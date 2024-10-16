import React from "react";
import Button from "../../components/basicComponents/Button";
import { Link } from "react-router-dom";
import {
  arrowRight,
  userProfileEdit,
  userProfileCheckmark,
  setting,
} from "../../assets/icon/Icons";

interface SidebarProfileProps {
  onComponentChange: (type: string) => void;
}

const Sidebar: React.FC<SidebarProfileProps> = ({ onComponentChange }) => {
  const handleItemClick = (type: string) => {
    onComponentChange(type);
  };

  const sidebarItems = [
    { icon: userProfileEdit, text: "اطلاعات فردی", type: "personal" },
    { icon: userProfileCheckmark, text: "اطلاعات حساب", type: "account" },
    { icon: setting, text: "تنظیمات", type: "setting" },
  ];

  return (
    <div className="bg-white mr-[50px] pt-10 h-screen w-[340] flex flex-col border-solid border-l-[0.5px] border-gray-primary">
      <h1 className="pb-5 font-black text-2xl bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
        کوئرا تسک منیجر
      </h1>
      <Button classNames="mt-[95px] w-[113px] h-9 h-10 flex" type="submit">
        <div className="text-red"></div>
        <img src={arrowRight} alt="arrow right icon" className="size-6" />
        <Link to={"/dashboard"}>
          <span>بازگشت</span>
        </Link>
      </Button>
      <div className="mt-[43px] ml-6">
        {sidebarItems.map((item, index) => (
          <div
            key={index} // Fixed key to use index
            className="flex items-center mb-8 pr-4 pl-4 pt-2 pb-2 hover:bg-cyan-secondary hover:font-extrabold hover:text-sm rounded-[4px] h-10 w-[266px] cursor-pointer"
            onClick={() => handleItemClick(item.type)}
          >
            <img
              src={item.icon}
              alt="user profile checkmark icon"
              className="size-6"
            />
            <h2 className="pr-[11px]">{item.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
