import React, { useState } from "react";
import Tag from "../tag/Tag";
import { search } from "../../assets/icon/Icons";

const New: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [newTagValue, setNewTagValue] = useState("");

  const handleTagClick = () => {
    setShowInput(true);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTagValue.trim() !== "") {
      console.log("مقدار اینپوت:", newTagValue);
      // در اینجا می‌توانید عملیات ذخیره کردن تگ جدید را انجام دهید
      setShowInput(false); // بستن اینپوت پس از وارد کردن
      setNewTagValue(""); // پاک کردن مقدار اینپوت
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTagValue(e.target.value);
  };

  return (
    <div className="p-2 w-full " onClick={handleTagClick}>
      {showInput ? (
        <>
          <Tag
            text={"تگ جدید"}
            className="bg-orange-secondary text-orange-primary text-center cursor-pointer text-xs font-normal"
          />
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="تگ جدید"
              className="border rounded px-6 py-1 mt-2 w-full text-xs font-normal bg-[#E9E9E9] focus:outline-none focus:border-2 focus:border-brand-primary"
              onKeyDown={handleEnterPress}
              value={newTagValue}
              onChange={handleChange}
            />
            <img
              src={search}
              alt="search icon"
              className="size-4 absolute mr-2 cursor-pointer "
            />
          </div>
          <p className="text-xs font-normal text-[#3D3D3D] ">
            برای ساختن تگ جدید اینتر بزنید
          </p>
        </>
      ) : (
        <Tag
          text={"تگ جدید"}
          className="bg-orange-secondary text-orange-primary text-center cursor-pointer text-xs font-normal"
        />
      )}
    </div>
  );
};

export default New;
