import React, { useState } from "react";
import PermissionUsers from "../../components/permission/PermissionUsers";
import SimpleButton, {
  FlexDirection,
} from "../../components/basicComponents/Buttons/SimpleButton";
import { users } from "../../components/component-A/DataFakeTest";
import ShareTaskHeader from "../../components/dataForm/DataForm";
import { arrowDown } from "../../assets/icon/Icons";
import Tag from "../../components/tag/Tag";
import Dropdown from "../../components/dropdown/Dropdown";

interface ShareTaskProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ShareTask: React.FC<ShareTaskProps> = ({ isOpen, closeModal }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeModal();
    console.log("صفحه بسته شد");
  };

  const handleCopyButtonClick = () => {
    console.log("من کپی لینکم");
  };

  const [openModals, setOpenModals] = useState<{ [key: string]: boolean }>({});

  const handleOpenModal = (username: string) => {
    setOpenModals((prev) => ({ ...prev, [username]: true }));
  };

  const handleCloseModal = (username: string) => {
    setOpenModals((prev) => ({ ...prev, [username]: false }));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
          <div className="w-[462px] h-[320px] rounded-3 border flex flex-col rounded-lg items-center bg-white">
            <ShareTaskHeader
              headerText={"تسک"}
              onButtonClick={handleButtonClick}
              onCopyButtonClick={handleCopyButtonClick}
            />
            <div className="mt-4 w-full">
              {users.map((user) => (
                <div
                  key={user.username}
                  className="flex items-center mb-2 mr-2"
                >
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="size-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium mr-[7px]">
                    {user.username}
                  </span>
                  {user.isCreated ? (
                    <>
                      <Tag
                        text={"Owner"}
                        className={`bg-blue-secondary text-blue-primary text-center text-xs font-normal mr-4 rounded-[6px]`}
                      />
                      <SimpleButton
                        onClick={() => handleOpenModal(user.username)}
                        classNames="border-[#E9EBF0] ml-4 mr-auto"
                        isOpen={!user.isCreated}
                        icon={arrowDown}
                        flexDirection={FlexDirection.RowReverse}
                      >
                        دسترسی کامل
                      </SimpleButton>
                    </>
                  ) : (
                    <Dropdown
                      ClassNames="ml-4 mr-auto"
                      buttonContent={
                        <SimpleButton
                          onClick={() => handleOpenModal(user.username)}
                          classNames="border-[#E9EBF0]"
                          isOpen={!user.isCreated}
                          icon={arrowDown}
                          flexDirection={FlexDirection.RowReverse}
                        >
                          دسترسی کامل
                        </SimpleButton>
                      }
                      componentContent={
                        <PermissionUsers
                          isOpen={openModals[user.username] ?? false}
                          onClose={() => handleCloseModal(user.username)}
                        />
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareTask;
