import React, { useState } from "react";
import Tag from "./Tag";
import { tagsList } from "../component-A/DataFakeTest";
import { search } from "../../assets/icon/Icons";
import Dropdown from "../dropdown/Dropdown";
import Options from "./Options";

const List: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTags = tagsList.filter((tag) => tag.title.includes(searchTerm));

  return (
    <div className="m-2 ">
      <input
        type="text"
        placeholder="جستجو تگ"
        className="border rounded px-6 py-1 w-full text-xs font-normal bg-[#E9E9E9] focus:outline-none focus:border-2 focus:border-brand-primary"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <img
        src={search}
        alt="search icon"
        className="size-4 absolute mr-2 cursor-pointer transform -translate-y-[21px] "
      />

      {filteredTags.map((tag) => (
        <div key={tag.id} className="flex items-center">
          <Tag
            text={tag.title}
            className={`bg-${tag.color}-secondary text-${tag.color}-primary text-center text-xs font-extrabold	`}
          />
          <Dropdown
            buttonContent={
              <button
                type="button"
                className="mr-auto text-[#BDBDBD] cursor-pointer"
              >
                ...
              </button>
            }
            componentContent={<Options />}
            ClassNames="ml-2 mr-auto "
          />
        </div>
      ))}
    </div>
  );
};

export default List;
