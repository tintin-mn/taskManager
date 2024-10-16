import React from "react";
import New from "../newTag/New";
import List from "./List";

interface ViewProps {
  isOpen: boolean;
  closeModal: () => void;
}

const View: React.FC<ViewProps> = ({ isOpen, closeModal }) => {
  const onBackgroundClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    closeModal();
    console.log("لیست بسته شد");
  };

  const onModalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // جلوگیری از بسته شدن مودال زمانی که روی خود مودال کلیک می‌شود
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/25 z-50"
          onClick={onBackgroundClickHandler}
        >
          <div
            className="w-[190px]  rounded-[8px]  bg-white"
            onClick={onModalClickHandler}
          >
            <New />
            <List />
          </div>
        </div>
      )}
    </>
  );
};

export default View;
