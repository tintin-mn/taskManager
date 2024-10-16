import React, { useState } from "react";
import ShareTaskHeader from "../dataForm/DataForm";
import { users } from "../component-A/DataFakeTest";
import Tag from "../tag/Tag";
import SimpleButton, {
  FlexDirection,
} from "../basicComponents/Buttons/SimpleButton";
import { arrowDown } from "../../assets/icon/Icons";
import PermissionUsers from "../permission/PermissionUsers";

const ShareWorkspace: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("صفحه بسته شد");
    // اجرای عملیات بستن صفحه
  };

  const handleCopyButtonClick = () => {
    console.log("من کپی لینکم");
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[470px] h-[332px] rounded-[12px] border flex flex-col items-center ">
      <ShareTaskHeader
        headerText={"فضای کار"}
        onButtonClick={handleButtonClick}
        onCopyButtonClick={handleCopyButtonClick}
      />
      <div className="mt-4 w-full">
        {users.map((user) => (
          <div key={user.username} className="flex items-center mb-2 mr-2">
            <img
              src={user.avatar}
              alt={user.username}
              className="size-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium mr-[7px]">
              {user.username}
            </span>
            {user.isCreated && (
              <Tag
                text={"Owner"}
                className={`bg-blue-secondary text-blue-primary text-center text-xs font-normal	mr-4 rounded-[6px]`}
              />
            )}
            <SimpleButton
              children={"دسترسی کامل"}
              onClick={handleOpenModal}
              classNames=" ml-1 mr-auto border-[#E9EBF0]"
              isOpen={!user.isCreated}
              icon={arrowDown}
              flexDirection={FlexDirection.RowReverse}
            />
            <SimpleButton
              children={"همه پروژه‌ها"}
              onClick={handleOpenModal}
              classNames=" ml-4 border-[#E9EBF0]"
              isOpen={!user.isCreated}
              icon={arrowDown}
              flexDirection={FlexDirection.RowReverse}
            />
            <div>
              {modalOpen && (
                <PermissionUsers
                  onClose={handleCloseModal}
                  isOpen={user.isCreated}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareWorkspace;
