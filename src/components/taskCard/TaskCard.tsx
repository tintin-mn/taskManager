import cardImage from "/componentT/image-card.svg";
import justify from "/componentT/justify-right.svg";
import checked from "/componentT/checked.svg";
import checkedCircle from "/componentT/checked-circle.svg";
import dots from "/componentT/dots.svg";
import TagFormat from "../basicComponents/TagFormat.tsx";
import FlagSVG from "../flagSimpleSVG/FlagSimpleSVG.tsx";
import { useState } from "react";
import Information from "../../pages/taskInformation/Information.tsx";

const TaskCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <main
      className="w-60 bg-white rounded-2xl p-4 flex flex-col justify-between gap-y-4"
      style={{
        boxShadow:
          "inset 0px -3px 0px 0px rgba(0,0,0,0.2), 0px 7px 6px -3px rgba(0,0,0,0.3), 0px 2px 4px 0px rgba(0,0,0,0.4)",
      }}
    >
      <img src={cardImage} alt="icon" className="rounded-sm" />
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#534D60]">اسم لیست</p>
        <span className="bg-orange-secondary text-orange-primary text-[8px] p-1 rounded-full">
          MN
        </span>
      </div>
      <div className="text-xs flex gap-x-1">
        این یک تیتر برای این تسک است.
        <img src={justify} alt="icon" />
      </div>
      <div className="text-xs flex gap-x-2">
        <div className="flex items-center justify-center gap-x-0.5">
          <FlagSVG fillColor="red-primary" className="w-4 h-4" />
          <span>۵ مهر - فردا</span>
        </div>
        <div className="flex items-center justify-center gap-x-0.5">
          <img src={checked} alt="icon" />
          <span className="text-[#BDC0C6]">۲ / ۱۲</span>
        </div>
      </div>
      <div className="flex gap-x-2">
        <TagFormat
          tagName={"درس"}
          className="text-blue-primary bg-blue-secondary"
        />
        <TagFormat
          tagName={"پروژه"}
          className="text-grape-primary bg-grape-secondary"
        />
      </div>
      <div className="w-full h-[1px] bg-gray-secondary" />
      <div className="flex items-center justify-between">
        <img src={checkedCircle} alt="icon" />
        <img onClick={handleButtonClick} src={dots} alt="icon" />
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2"
          ></button>
          <Information />
        </div>
      )}
    </main>
  );
};

export default TaskCard;
