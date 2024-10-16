import { useState } from "react";
import ColumnLabelTitle from "../../components/columnLabelTitle/ColumnLabelTitle.tsx";
import NewTaskButtonInList from "../../components/newTaskButtonInList/newTaskButtonInList.tsx";
import TaskCard from "../../components/taskCard/TaskCard.tsx";
import NewTaskButton from "./NewTaskButton.tsx";
import NewTask from "../task/New.tsx";

const ColumnShow = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-row justify-between">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-3">
            <ColumnLabelTitle
              message={"open"}
              className="border-orange-primary  h-10"
            />

            <TaskCard />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-3">
            <ColumnLabelTitle
              message={"In Progress"}
              className="border-indigo-primary h-10"
            />
            <NewTaskButtonInList />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-3">
            <ColumnLabelTitle
              message={"Pending"}
              className="border-yellow-primary h-10"
            />

            <TaskCard />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-3">
            <ColumnLabelTitle
              message={"Done"}
              className="border-green-primary h-10"
            />
            <NewTaskButtonInList />
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
};

export default ColumnShow;
