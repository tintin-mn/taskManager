import React from "react";
import CloseButton from "../basicComponents/Buttons/CloseButton";
import { users } from "../component-A/DataFakeTest";

interface ListUserProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ListUsers: React.FC<ListUserProps> = ({ isOpen, closeModal }) => {
  const onButtonClickHandler = () => {
    closeModal();
    console.log("لیست یوزرها بسته شد");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
          <div className="w-[200px] border flex flex-col rounded-lg bg-white">
            <CloseButton
              className="size-6 items-right mt-2 mr-2"
              onClick={onButtonClickHandler}
            />
            <h1 className="text-sm font-normal m-1 text-center">
              لیست کاربران
            </h1>
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
                  <span className="text-sm font-medium mr-[7px] cursor-pointer">
                    {user.username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListUsers;
