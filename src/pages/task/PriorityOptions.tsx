import React from "react";
import FlagSVG from "../../components/flagSimpleSVG/FlagSimpleSVG";
import CloseButton from "../../components/basicComponents/Buttons/CloseButton";

export interface PriorityProps {
  fillColor?: keyof typeof priorities;
  isOpen: boolean;
  closeModal: () => void;
}

const priorities = {
  "red-primary": "فوری",
  "yellow-primary": "بالا",
  "green-primary": "متوسط",
  "gray-primary": "پایین",
};

const PriorityOptions: React.FC<PriorityProps> = ({ isOpen, closeModal }) => {
  const priorityKeys = Object.keys(priorities) as (keyof typeof priorities)[];

  const onButtonClickHandler = () => {
    closeModal();
    console.log("اولویت تسک حذف شد");
  };

  const onPriorityClick = (priority: string) => {
    console.log(`اولویت ${priority} انتخاب شد`);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
          <div className="w-[158px] border rounded-[8px] bg-white">
            {priorityKeys.map((color, index) => (
              <div
                key={index}
                className="w-[142px] m-2 flex items-center cursor-pointer"
                onClick={() => onPriorityClick(priorities[color])}
              >
                <FlagSVG
                  fillColor={color}
                  className={`size-[34px] border-${color}`}
                />
                <p className={`text-black ml-2`}>{priorities[color]}</p>
              </div>
            ))}
            <div className="flex items-center mb-2 mt-4 cursor-pointer">
              <CloseButton
                onClick={onButtonClickHandler}
                className="size-5 mr-2 ml-2"
              />
              <p className="text-[#534D60]">حذف اولویت</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PriorityOptions;
