import React, { useState, useEffect } from "react";
import { addUser } from "../../assets/icon/Icons";
import CloseButton from "../../components/basicComponents/Buttons/CloseButton";
import Dropdown from "../../components/dropdown/Dropdown";
import {
  projectList,
  ProjectList,
} from "../../components/component-A/DataFakeTest";
import ListUsers from "../../components/listUser/ListUsers";

const NewHeader: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<string>("انتخاب پروژه");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const onProjectSelect = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsDropdownOpen(false);
    console.log("پروژه انتخاب شد:", projectTitle);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log("selectedProject:", selectedProject);
  }, [selectedProject]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center mb-8 gap-[13px]">
        <div className="size-4 bg-[#D9D9D9] rounded-[2px]"></div>
        <h1 className="font-medium text-2xl">عنوان تسک</h1>
        <CloseButton className="mr-auto size-6" />
      </div>
      <div className="flex items-center mb-8 gap-[10px]">
        <h2 className="flex items-center gap-[10px] text-base font-medium">
          در
          <Dropdown
            buttonContent={
              <input
                type="text"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                onClick={toggleDropdown}
                className="border text-center rounded-[6px] w-[158px] h-[32px] bg-white text-black cursor-pointer focus:outline-none focus:border-2 focus:border-brand-primary"
              />
            }
            componentContent={
              isDropdownOpen && (
                <div className="absolute mt-2 rounded-[6px] w-[158px] bg-white border border-gray-200 shadow-md text-black transform translate-x-2 translate-y-8">
                  {projectList.map((project: ProjectList, index: number) => (
                    <p
                      key={project.title}
                      className={`cursor-pointer p-2 flex items-center justify-center ${
                        index !== projectList.length - 1 ? "border-b" : ""
                      }`}
                      onClick={() => onProjectSelect(project.title)}
                    >
                      {project.title}
                    </p>
                  ))}
                </div>
              )
            }
          />
          برای
        </h2>
        <button onClick={openModal}>
          <img src={addUser} className="size-[34px]" alt="add user icon" />
        </button>
        {isModalOpen && <ListUsers isOpen={true} closeModal={closeModal} />}
      </div>
    </>
  );
};

export default NewHeader;
