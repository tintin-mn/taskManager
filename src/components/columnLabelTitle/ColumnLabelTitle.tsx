import dots from "../../../public/componentT/dots.svg";
import plus from "../../../public/componentT/plus.svg";
import React from "react";

interface IColumnTitleProps {
    className: string;
    message: string;
}

const ColumnLabelTitle: React.FC<IColumnTitleProps> = ({className, message}) => {
    return (
        <main className={`w-60 flex items-center justify-between px-3 py-2 rounded-full bg-white border-t-2 ${className}`}
        style={{boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)"}}
        >
            <div className="flex items-center justify-center gap-x-1">
                <p className="text-basext">{message}</p>
                <span className="text-xs bg-[#F4F4F4] rounded-full p-1">o</span>
            </div>
            <div className="flex items-center justify-center gap-x-1">
                <img src={dots} alt="icon" className="cursor-pointer"/>
                <img src={plus} alt="icon" className="cursor-pointer"/>
            </div>
        </main>
    );
};

export default ColumnLabelTitle;