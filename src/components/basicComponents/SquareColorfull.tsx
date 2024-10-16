import React from "react";

interface ISquareColorfull {
    className: string
}

const SquareColorfull: React.FC<ISquareColorfull> = ({className}) => {
    return (
        <div className={`w-5 h-5 rounded-[4px] ${className}`}></div>
    );
};

export default SquareColorfull;