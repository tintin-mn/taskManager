import React from "react";
import { avatar, textTask } from "../../components/component-A/DataFakeTest";
import SmallBox from "../../components/comment/SmallBox";
import LargeBox from "../../components/comment/LargeBox";

interface CommentSectionProps {
  isLargeBoxOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  isLargeBoxOpen,
  handleOpen,
  handleClose,
}) => {
  return (
    <>
      <div className="border-t h-[102px] w-[659px] flex pt-6 pr-4">
        <div className="flex flex-col pl-2">
          <img
            src={avatar}
            alt="add user"
            className="size-[34px] rounded-full"
          />
        </div>
        <div className="w-[583px] h-[102px] ml-4 flex border rounded-[12px] flex-col">
          <div className="w-[497px] h-[23px] flex items-center mt-4 mr-4 b-2">
            <h2 className="flex flex-center text-base font-extrabold text-brand-primary ml-2">
              شما
            </h2>
            <p className="flex flex-center text-xs font-normal text-[#AAAAAA]">
              کامنت گذاشتید
            </p>
            <p className="flex flex-center text-xs font-normal text-[#AAAAAA] mr-auto">
              12 تیر
            </p>
          </div>
          {textTask.map((task) => (
            <p
              className="h-[39px] w-[483px] text-xs font-normal mr-4 text-black"
              key={task.shortDesc}
            >
              {task.shortDesc}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-auto max-w-full">
        {!isLargeBoxOpen ? (
          <SmallBox onOpen={handleOpen} />
        ) : (
          <LargeBox isOpen={isLargeBoxOpen} onClose={handleClose} />
        )}
      </div>
    </>
  );
};

export default CommentSection;
