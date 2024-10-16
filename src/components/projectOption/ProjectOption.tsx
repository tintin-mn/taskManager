import React from "react";
import OptionForm from "../optionForm/OptionForm";

const ProjectOptions: React.FC = () => {
  const handleAdd = () => {
    console.log("ساختن جدید");
  };

  const handleEdit = () => {
    console.log("ویرایش");
  };

  const handleCopyLink = () => {
    console.log("کپی لینک");
  };

  const handleDelete = () => {
    console.log("حذف");
  };

  const handleEditColor = () => {
    console.log("ویرایش رنگ");
  };

  const handleClickButton = () => {
    console.log("اشتراک گذاری");
  };

  return (
    <OptionForm
      className="w-[184px] h-[204px]"
      title={"پروژه"}
      subTitle={"تسک"}
      type={"project"}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onCopyLink={handleCopyLink}
      onDelete={handleDelete}
      onEdiColor={handleEditColor}
      onClickButton={handleClickButton}
    />
  );
};

export default ProjectOptions;
