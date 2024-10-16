import React from "react";
import EditSVG from "../editIcon/EditIcon";
import { plus, trash } from "../../assets/icon/Icons";
import LinkSVG from "../linkIcon/LinkIcon";

const ColumnOption: React.FC = ({}) => {
  const handleEditColumn = () => {
    console.log("ویرایش نام ستون");
  };

  const handleAddTask = () => {
    console.log("افزودن تسک");
  };

  const handleArchiveTasks = () => {
    console.log("آرشیو تسکها");
  };

  const onDeleteColumn = () => {
    console.log("حذف ستون");
  };

  return (
    <div className="w-[166px] h-[152px] border rounded-[8px] bg-white ">
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={handleEditColumn}
      >
        <EditSVG stroke="#323232" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">ویرایش نام ستون</p>
      </div>

      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={handleAddTask}
      >
        <img src={plus} alt="add task icon" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">افزودن تسک</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={handleArchiveTasks}
      >
        <LinkSVG fill="#323232" className="size-5 ml-2" />
        <p className="text-sm	 font-normal">آرشیو تمام تسک‌ها</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-4 mr-3"
        onClick={onDeleteColumn}
      >
        <img src={trash} alt="trash icon" className="size-5 ml-2" />
        <p className="text-sm	 font-normal text-red-primary">حذف</p>
      </div>
    </div>
  );
};

export default ColumnOption;
