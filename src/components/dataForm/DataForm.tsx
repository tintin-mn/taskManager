import React from "react";
import CloseButton from "../basicComponents/Buttons/CloseButton";
import InputButton from "../basicComponents/Buttons/InputWithButton";
import SimpleButton from "../basicComponents/Buttons/SimpleButton";
import { link } from "../../assets/icon/Icons";

interface ShareTaskHeaderProps {
  headerText: string;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCopyButtonClick: () => void;
}

const ShareTaskHeader: React.FC<ShareTaskHeaderProps> = ({
  headerText,
  onButtonClick,
  onCopyButtonClick,
}) => {
  return (
    <>
      <div className="flex justify-start mt-4 items-center w-full relative">
        <CloseButton
          className="size-6 transform -translate-x-4"
          onClick={onButtonClick}
        />
        <h1 className="font-medium text-xl flex item-center justify-center w-full">
          به اشتراک گذاری {headerText}
        </h1>
      </div>
      <div className="text-center w-full flex flex-col items-center mt-10">
        <InputButton
          onSubmit={(email: string) => {
            console.log("Email ", email);
          }}
        />
      </div>
      <div className="flex mt-6 item-center w-full">
        <img src={link} className="size-5 mr-4" alt="link" />
        <h2 className="text-sm font-normal mr-2 text-right">لینک خصوصی</h2>
        <SimpleButton
          children={"کپی لینک"}
          onClick={onCopyButtonClick}
          classNames="ml-4 mr-[237px]"
        />
      </div>
      <div className="mt-6 flex w-full">
        <h2 className="text-sm font-normal mr-4 text-right text-gray-primary">
          اشتراک گذاشته شده با
        </h2>
      </div>
    </>
  );
};

export default ShareTaskHeader;
