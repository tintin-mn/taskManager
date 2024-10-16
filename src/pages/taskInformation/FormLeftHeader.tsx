import React from "react";

interface TaskFormLeftHeaderProps {
  createdDate: string;
  deadline: string;
}

const TaskFormLeftHeader: React.FC<TaskFormLeftHeaderProps> = ({
  createdDate,
  deadline,
}) => {
  return (
    <div className="h-[57px] w-full flex items-center mb-4">
      <div className="m-5 pl-6 border-l">
        <p className="text-[#BBBBBB] font-normal text-xs">ساخته شده در</p>
        <h2 className="text-black text-base font-medium mt-2">{createdDate}</h2>
      </div>
      <div className="pl-6">
        <p className="text-[#BBBBBB] font-normal text-xs">ددلاین</p>
        <h2 className="text-black text-base font-medium mt-2">{deadline}</h2>
      </div>
    </div>
  );
};

export default TaskFormLeftHeader;
