import React from "react";

interface ITaskQuantity {
    number: number;
}
const TaskQuantity: React.FC<ITaskQuantity> = ({number}) => {
    return (
        <div className="gap-x-1 flex items-center">
            {number}
            <span>تسک</span>
        </div>
    );
};

export default TaskQuantity;