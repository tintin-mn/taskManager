import ProjectName from "../../components/projectName/ProjectName.tsx";
import ArrowDown from "../../components/arrowDown/ArrowDown.tsx";
import TagFormat from "../../components/basicComponents/TagFormat.tsx";
import TaskQuantity from "../../components/basicComponents/TaskQuantity.tsx";
import TableTasks from "../../components/tableTask/TableTasks.tsx";
import NewTaskButton from "./NewTaskButton.tsx";
import { useState } from "react";
import NewTask from "../task/New.tsx";

const ListShow = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <section className="flex flex-col justify-between">
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <ProjectName message="پروژه اول" />
        </div>
        <div className="collapse-content">
          <div className="flex flex-col gap-y-8 justify-between mr-6">
            <div className="flex items-center gap-x-2">
              <ArrowDown />
              <TagFormat tagName="Pending" className="bg-pink-primary" />
              <TaskQuantity number={2} />
            </div>
            <div className="-mt-16">
              <TableTasks />
            </div>
          </div>
        </div>
      </div>
      <div className="self-end absolute bottom-10">
        <NewTaskButton onClick={handleButtonClick} />
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2"
          ></button>
          <NewTask />
        </div>
      )}
    </section>
  );

  // {/*<div className="flex flex-col gap-y-8 justify-between">*/}
  // {/*    <ProjectName message="پروژه اول"/>*/}
  // {/*    /!*<div className="flex items-center gap-x-2">*!/*/}
  // {/*    /!*    <ArrowDown/>*!/*/}
  // {/*    /!*    <TagFormat tagName="Pending" className="bg-pink-primary"/>*!/*/}
  // {/*    /!*    <TaskQuantity number={2}/>*!/*/}
  // {/*    /!*</div>*!/*/}
  // {/*    <div className="-mt-16">*/}
  // {/*        <TableTasks/>*/}
  // {/*    </div>*/}
  // {/*</div>*/}

  // template of 2 collapse
  //         < div
  //     tabIndex = {0}
  //     className = "collapse collapse-arrow border-base-300 bg-base-200 border" >
  //         < div
  //     className = "collapse-title text-xl font-medium" > Focus
  //     me
  //     to
  //     see
  //     content < /div>
  //     <div className="collapse-content">
  //         <p>tabindex={0} attribute is necessary to make the div focusable</p>
  //     </div>
  // </div>
  //
  //     <div className="collapse bg-base-200">
  //         <input type="checkbox"/>
  //         <div className="collapse-title text-xl font-medium">Click me to show/hide content</div>
  //         <div className="collapse-content">
  //             <p>hello</p>
  //         </div>
  //     </div>
};

export default ListShow;
