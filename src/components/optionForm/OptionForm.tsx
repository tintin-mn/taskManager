import React from "react";
import { plus, trash } from "../../assets/icon/Icons";
import ColorPoletSVG from "../colorPoletIcon/ColorPoletIcon";
import EditSVG from "../editIcon/EditIcon";
import LinkSVG from "../linkIcon/LinkIcon";
import Buttons from "../basicComponents/Button";
import SharingSVG from "../sharingIcon/SharingIcon";

type OptionType = {
  type: "workspace" | "project";
  title: string;
  subTitle: string;
  onAdd?: () => void;
  onEdit?: () => void;
  onCopyLink?: () => void;
  onClickButton?: () => void;
  onDelete?: () => void;
  onEdiColor?: () => void;
  className?: string;
};

const OptionForm: React.FC<OptionType> = ({
  className,
  type,
  title,
  subTitle,
  onAdd,
  onEdit,
  onCopyLink,
  onClickButton,
  onDelete,
  onEdiColor,
}) => {
  return (
    <div className={`border rounded-[8px] bg-white ${className}`}>
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={onAdd}
      >
        <img src={plus} alt="add icon" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">ساختن {subTitle} جدید</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={onEdit}
      >
        <EditSVG stroke="#323232" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">ویرایش نام {title}</p>
      </div>
      {type === "workspace" && (
        <div
          className="flex items-center cursor-pointer mt-4 mr-3"
          onClick={onEdiColor}
        >
          <ColorPoletSVG stroke="#323232" className="size-5 ml-2" />
          <p className="text-sm	 font-normal">ویرایش رنگ</p>
        </div>
      )}
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={onCopyLink}
      >
        <LinkSVG fill="#323232" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">کپی لینک</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={onDelete}
      >
        <img src={trash} alt="trash icon" className="size-5 ml-2" />
        <p className="text-sm	 font-normal text-red-primary">حذف</p>
      </div>
      <div className=" flex items-center justify-center cursor-pointer mt-4  mb-3">
        <Buttons
          type="submit"
          classNames="text-xs font-normal flex items-center"
          onClick={onClickButton}
        >
          <SharingSVG className="size-4" stroke="white" />
          اشتراک گذاری
        </Buttons>
      </div>
    </div>
  );
};

export default OptionForm;
