import React, { useState } from "react";
import CloseButton from "../../components/basicComponents/Buttons/CloseButton";
import { tags, addAttach } from "../../assets/icon/Icons";
import { textTask } from "../../components/component-A/DataFakeTest";
import TaskRightHeader from "./FormRightHeader";
import TaskFormLeftHeader from "./FormLeftHeader";
import CommentSection from "./FormCommentSection";
import FileManagement from "../../utils/FileManagement";
import Tag from "../../components/tag/Tag.tsx";
const TaskFormData: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("صفحه بسته شد");
    // اجرای عملیات بستن صفحه
  };

  const RedButtonClick = () => {
    console.log("ورود");
  };

  const [isLargeBoxOpen, setIsLargeBoxOpen] = useState(false);

  const handleOpen = () => {
    setIsLargeBoxOpen(true);
  };

  const handleClose = () => {
    setIsLargeBoxOpen(false);
  };

  const existedTag: boolean = true;

  return (
    <div className="h-[594px] w-[1352px] rounded-[20px] bg-white">
      <CloseButton
        className="size-6 mt-[36px] mb-[30px] mr-[36px] item-right"
        onClick={handleButtonClick}
      />
      <div className="w-[1316px] h-[506px] item-end flex mr-[36px]">
        <div className="w-[657px] h-[367px] flex flex-col justify-betwwen">
          <TaskRightHeader onRedButtonClick={RedButtonClick} />
          <div className="h-[34px] flex flex-center mb-6 pb-6 border-t pt-6">
            <img src={tags} className=" size-[34px] ml-4 " />
            {existedTag && (
              <Tag
                text={"میانترم"}
                className={
                  "bg-orange-secondary text-orange-primary text-center"
                }
              />
            )}
          </div>
          <div>
            <h1 className="font-extrabold	text-base	text-black mb-2">
              عنوان تسک
            </h1>
            {textTask.map((task) => (
              <p
                className="border rounded-[12px] h-[116px] w-[617px] p-3 mb-6"
                key={task.description}
              >
                {task.description}
              </p>
            ))}
          </div>
          <div className="flex items-center">
            <FileManagement
              inputId="addAttach"
              htmlForLabel="addAttach"
              acceptFormat="*/*"
              onFileChange={(file) => {
                console.log("Selected file:", file);
                // منطق باید برای اتچ فایل اجرا شود
              }}
              buttonLabel={
                <>
                  <div className="flex items-center">
                    <img src={addAttach} className="size-6 ml-2" />
                    <p className="text-[#208D8E] text-xs font-normal flex-shrink-0">
                      اضافه کردن پیوست
                    </p>
                  </div>
                </>
              }
              buttonClassName="size-6"
              inputClassName="hidden"
              showSelectedFilePreview={true}
              attachIconPostion="size-8"
              attachErrorPostion="mt-[50px]"
            />
          </div>
        </div>
        <div className="w-[659px] h-[506px] flex flex-col justify-between border-r">
          <TaskFormLeftHeader
            createdDate="1 اردیبهشت 1402"
            deadline="پس‌فردا"
          />
          <CommentSection
            isLargeBoxOpen={isLargeBoxOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskFormData;
