import { useEffect, useState } from "react";
import CloseButton from "../basicComponents/Buttons/CloseButton";
import Dropdown from "../dropdown/Dropdown";
import DeleteButton from "./baseDeleteButton";
// import trash from "./trash.svg";

interface ProjectList {
  id: number;
  title: string;
}

const isOrNot: ProjectList[] = [
  {
    id: 1,
    title: "است",
  },
  {
    id: 2,
    title: "نیست",
  },
];

const projectList: ProjectList[] = [
  {
    id: 1,
    title: "پروژه اول",
  },
  {
    id: 2,
    title: "پروژه دوم",
  },
  {
    id: 3,
    title: "پروژه سوم",
  },
  {
    id: 4,
    title: "پروژه چهارم",
  },
];
const TagsList: ProjectList[] = [
  {
    id: 1,
    title: "پروژه",
  },
  {
    id: 2,
    title: "کار",
  },
  {
    id: 3,
    title: "درس ",
  },
];
const Filter = (): JSX.Element => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("صفحه بسته شد");
    // اجرای عملیات بستن صفحه
  };

  const [selectedProject, setSelectedProject] = useState<string>("تگ");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string>("انتخاب کنید");
  const [isDropdownOpenTags, setIsDropdownOpenTags] = useState<boolean>(false);
  const [selectedIsOrNot, setSelectedIsOrNot] = useState<string>("است");
  const [isDropdownOpenIsOrNot, setIsDropdownOpenIsOrNot] =
    useState<boolean>(false);

  const onProjectSelect = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsDropdownOpen(false);
    console.log("پروژه انتخاب شد:", projectTitle);
  };
  const onProjectSelectTags = (projectTitle: string) => {
    setSelectedTags(projectTitle);
    setIsDropdownOpenTags(false);
    console.log("پروژه انتخاب شد:", projectTitle);
  };
  const onProjectSelectIsOrNot = (projectTitle: string) => {
    setSelectedIsOrNot(projectTitle);
    setIsDropdownOpenIsOrNot(false);
    console.log("فعل انتخاب شد:", projectTitle);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownTags = () => {
    setIsDropdownOpenTags(!isDropdownOpenTags);
  };
  const toggleDropdownIsOrNot = () => {
    setIsDropdownOpenIsOrNot(!isDropdownOpenIsOrNot);
  };
  useEffect(() => {
    console.log("selectedProject:", selectedProject);
  }, [selectedProject]);
  useEffect(() => {
    console.log("selectedTags:", selectedTags);
  }, [selectedTags]);
  useEffect(() => {
    console.log("selectedIsOrNot:", selectedIsOrNot);
  }, [selectedIsOrNot]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[718px] min-h-[300px] border-2 flex flex-col rounded-lg p-2 ">
        <div className=" w-[673px] min-h-[48px] flex rounded-lg m-4 p-2 items-center justify-between ">
          <div className="w-[76px] font-extrabold text-2xl flex justify-center  ">
            فیلترها
          </div>
          <div className="flex justify-center">
            <CloseButton className="size-6" onClick={handleButtonClick} />
          </div>
        </div>

        <div className="rounded-lg p-2 mx-3">
          <div className="flex rounded-lg items-center justify-between">
            <div className="flex gap-2">
              <div className="w-[90px] text-sm">تسک هایی که</div>
              <div className="w-[160px] rounded-lg">
                <div className="flex gap-[8px] text-xs">
                  <Dropdown
                    buttonContent={
                      <button
                        onClick={toggleDropdown}
                        className="border text-center rounded-[6px] w-[158px] h-[27px] bg-white cursor-pointer text-black hover:outline-none hover:border-2 hover:border-brand-primary"
                      >
                        {selectedProject}
                      </button>
                    }
                    componentContent={
                      isDropdownOpen && (
                        <div className="absolute mt-1 rounded-[6px] w-[158px] bg-white border border-gray-200 shadow-md text-black transform translate-x-2 translate-y-8">
                          {projectList.map(
                            (project: ProjectList, index: number) => (
                              <p
                                key={project.title}
                                className={`cursor-pointer p-2 flex items-center justify-center ${
                                  index !== projectList.length - 1
                                    ? "border-b"
                                    : ""
                                }`}
                                onClick={() => onProjectSelect(project.title)}
                              >
                                {project.title}
                              </p>
                            )
                          )}
                        </div>
                      )
                    }
                  />
                </div>

                {/* <div>^</div> ToDo icon */}
              </div>
              <div className="text-sm">آن ها</div>
              <div className="w-[132px] rounded-lg">
                <div className="text-xs">
                  <div className="flex gap-[8px] text-xs">
                    <Dropdown
                      buttonContent={
                        <button
                          onClick={toggleDropdownTags}
                          className="border text-center rounded-[6px] w-[147px] h-[27px] bg-white cursor-pointer text-black hover:outline-none hover:border-2 hover:border-brand-primary"
                        >
                          {selectedProject}
                        </button>
                      }
                      componentContent={
                        isDropdownOpenTags && (
                          <div className="absolute mt-1 rounded-[6px] w-[158px] bg-white border border-gray-200 shadow-md text-black transform translate-x-2 translate-y-8">
                            {TagsList.map(
                              (project: ProjectList, index: number) => (
                                <p
                                  key={project.title}
                                  className={`cursor-pointer p-2 flex items-center justify-center ${
                                    index !== TagsList.length - 1
                                      ? "border-b"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    onProjectSelectTags(project.title)
                                  }
                                >
                                  {project.title}
                                </p>
                              )
                            )}
                          </div>
                        )
                      }
                    />
                  </div>
                </div>
                {/* <div>^</div> */}
                {/* ToDo Add Icon instead of ^ */}
              </div>
              <div className="w-[8px] rounded-lg">
                <div className="text-xs">
                  <div className="flex items-center gap-[8px]">
                    <Dropdown
                      buttonContent={
                        <button
                          onClick={toggleDropdownIsOrNot}
                          className="border text-center mr-4 rounded-[6px] w-[107px] h-[27px] bg-white text-black cursor-pointer hover:outline-none hover:border-2 hover:border-brand-primary"
                        >
                          {selectedIsOrNot}
                        </button>
                      }
                      componentContent={
                        isDropdownOpenIsOrNot && (
                          <div className="absolute mt-1 rounded-[6px] w-[158px] bg-white border border-gray-200 shadow-md text-black transform translate-x-2 translate-y-8">
                            {isOrNot.map(
                              (project: ProjectList, index: number) => (
                                <p
                                  key={project.title}
                                  className={`cursor-pointer p-2 flex items-center justify-center ${
                                    index !== isOrNot.length - 1
                                      ? "border-b"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    onProjectSelectIsOrNot(project.title)
                                  }
                                >
                                  {project.title}
                                </p>
                              )
                            )}
                          </div>
                        )
                      }
                    />
                  </div>
                </div>
                {/* <div>^</div> */}
              </div>
            </div>
            {/* <div className="flex justify-center"><Trash></Trash></div> */}
            <DeleteButton
              className="w-[5%] size-8 m-2"
              onClick={handleButtonClick}
            />
            {/* <img src={trash} alt="trash icon" className="size-6 m-2" /> */}
          </div>
          <div className="m-2 mt-12 text-brand-primary text-xs font-extrabold">
            افزودن فیلتر جدید
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
