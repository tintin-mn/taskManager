import React, { useState } from "react";
import RedButton from "../../components/basicComponents/Buttons/RedButton";
import { addUser, sharing } from "../../assets/icon/Icons";
import FlagSVG from "../../components/flagSimpleSVG/FlagSimpleSVG";
import { avatar } from "../../components/component-A/DataFakeTest";
import ShareTask from "../task/ShareTask";

interface TaskHeaderProps {
  onRedButtonClick: () => void;
}

const TaskRightHeader: React.FC<TaskHeaderProps> = ({ onRedButtonClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[57px] w-full flex items-center mb-4">
      <RedButton
        classNames="mr-4 mt-[13.5px] mb-[13.5px]"
        type="button"
        onClick={onRedButtonClick}
      >
        Open
      </RedButton>
      <div className="w-[238px] h-[34px] flex items-center">
        <div className="flex items-center mr-4 mt-[11.5px] mb-[11.5px]">
          <img
            src={avatar}
            alt="add user"
            className="size-[34px] rounded-full"
          />
          <img
            src={addUser}
            alt="add user"
            className="size-[34px] transform translate-x-2"
          />
        </div>
        <FlagSVG
          fillColor="red-primary"
          className="size-[34px] border-2 rounded-full border-dotted p-1 border-red-primary"
        />
      </div>
      <button
        onClick={openModal}
        className="flex mb-[16.5px] mt-[16.5px] ml-4 mr-auto"
      >
        <img src={sharing} alt="sharing" />
        اشتراک‌گذاری
      </button>
      {isModalOpen && <ShareTask isOpen={true} closeModal={closeModal} />}
    </div>
  );
};

export default TaskRightHeader;
