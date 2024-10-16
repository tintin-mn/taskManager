import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import Buttons from "../basicComponents/Button";
import { comment, attach } from "../../assets/icon/Icons";
import { listUsers } from "../component-A/DataFakeTest";
import MentionUser from "../../utils/MentionUsers";
import LinkTag from "../../utils/GenerateLinks";
import EmojiPickers from "../../utils/EmojiPickers";
import FileManagement from "../../utils/FileManagement";
// import schema from "../../../components/task/comment/ValidationSchema";

interface CommentFormInputs {
  comment: string;
}

interface LargeBoxProps {
  onClose: () => void;
  isOpen: boolean;
}

const LargeBox: React.FC<LargeBoxProps> = ({ onClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CommentFormInputs>({
    //فعلا ولدیشن رو کامنت کردم تا تصمیم نهایی گرفته شه
    // resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<CommentFormInputs> = (data) => {
    console.log("Submitted data:", data);
  };

  const handleSelectEmoji = (emoji: string) => {
    const currentComment = getValues("comment") || "";
    setValue("comment", currentComment + emoji);
  };

  const handleAddLinkTemplate = (linkTemplate: string) => {
    const currentComment = getValues("comment") || "";
    setValue("comment", currentComment + linkTemplate);
  };

  const handleAddMention = (mention: string) => {
    const currentComment = getValues("comment") || "";
    setValue("comment", currentComment + mention);
  };

  if (!isOpen) return null;

  return (
    <form
      className="w-[659px] h-[209px] border-t rounded-tl-[12px] rounded-tr-[12px] p-4 shadow-top"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start ">
          <textarea
            placeholder="کامنت"
            className={clsx(
              "w-full h-[150px] text-gray-primary resize-none font-4 text-right bg-transparent focus:outline-none focus:ring-0",
              {
                "border-red-500 mt-0": errors.comment,
              }
            )}
            {...register("comment")}
          ></textarea>
          <img src={comment} className="size-6 ml-9 flex-none self-start" />
        </div>
        {errors.comment && (
          <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>
        )}
        <div className="flex justify-between items-center transform -translate-y-[18px]">
          <div className="flex items-center ">
            <MentionUser users={listUsers} onAddMention={handleAddMention} />

            <LinkTag onAddLinkTemplate={handleAddLinkTemplate} />

            <EmojiPickers onSelectEmoji={handleSelectEmoji} className="mt-1 " />

            <FileManagement
              inputId="attach"
              htmlForLabel="attach"
              acceptFormat="*/*"
              onFileChange={(file) => {
                console.log("Selected file:", file);
                // منطق باید برای اتچ فایل اجرا شود
              }}
              buttonLabel={<img src={attach} className="size-6 ml-4" />}
              buttonClassName="size-6 "
              inputClassName="hidden"
              showSelectedFilePreview={true}
            />
          </div>
          <Buttons
            type="submit"
            classNames="text-[12px] mb-[15.5px] ml-5"
            onClick={onClose}
          >
            ثبت کامنت
          </Buttons>
        </div>
      </div>
    </form>
  );
};

export default LargeBox;
