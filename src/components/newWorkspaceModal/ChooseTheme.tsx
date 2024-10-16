import close from "../../../public/componentT/close.svg";
import leftArrow from "../../../public/componentT/leftArrow.svg";
import Buttons from "../basicComponents/Button.tsx";
import ChekboxColorList from "../checkbox/ChekboxColorList.tsx";

const ChooseTheme = () => {

    const onColorChangeHandler = () => {
        console.log("colors")
    }

    return (
        <div className=" p-6 bg-white flex flex-col items-center justify-center gap-y-10 border rounded-lg">
            <div className="flex justify-center items-center gap-x-12">
                <img src={close} alt="icon"/>
                <p className="font-extrabold text-2xl">ساختن فضای کاری جدید</p>
                <img src={leftArrow} alt="icon"/>
            </div>
            <div className="flex items-center justify-between gap-x-8">
                <div className="px-3 py-5 font-extrabold text-2xl bg-lime-primary rounded-lg">
                    ت ط
                </div>
                <div className="w-[293px]">
                    <p className="text-sm">رنگ فضای کاری</p>
                     <ChekboxColorList onColorChange={onColorChangeHandler}/>
                </div>
            </div>
            <Buttons type="submit" classNames="w-full h-10">ادامه</Buttons>
        </div>
    );
};

export default ChooseTheme;