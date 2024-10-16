import React from "react";

interface ITaskStatusTag {
    message: string;
    className: string;
}

const TaskStatusTag: React.FC<ITaskStatusTag> = ({message, className}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-[4px] px-1.5 py-1 font-medium text-base text-white ${className}`}>
            {message}
        </div>
    );
};

export default TaskStatusTag;