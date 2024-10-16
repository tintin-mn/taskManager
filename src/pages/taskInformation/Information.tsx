import React from "react";
import TaskFormData from "./Form";

const Information: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shadow-lg rounded-[20px]">
        <TaskFormData />
      </div>
    </div>
  );
};

export default Information;
