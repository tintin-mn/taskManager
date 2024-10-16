import add from "../../../public/componentT/plus.svg";

const NewBoardButton = () => {
    return (
        <div className="flex items-center py-2 pr-3 pl-28 rounded-2xl font-medium bg-white"
        style={{boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)"}}
        >
            <img src={add} alt="icon"/>
            <span>ساختن برد جدید</span>
        </div>
    );
};

export default NewBoardButton;