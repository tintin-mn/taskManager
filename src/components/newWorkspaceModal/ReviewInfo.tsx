import close from "../../../public/componentT/close.svg";
import leftArrow from "../../../public/componentT/leftArrow.svg";
import profile from "../../../public/componentT/image-card.svg";
import Buttons from "../basicComponents/Button.tsx";
import SquareColorfull from "../basicComponents/SquareColorfull.tsx";


const ReviewInfo = () => {
    return (
        <div className="p-6 bg-white flex flex-col items-center justify-center gap-y-10 border rounded-lg">
            <div className="flex justify-between items-center gap-x-12 w-full">
                <img src={close} alt="icon"/>
                <p className="font-extrabold text-2xl">مرور اطلاعات</p>
                <img src={leftArrow} alt="icon"/>
            </div>
            <div className="w-[400px] flex flex-col items-center justify-center gap-y-4 px-3 py-4 rounded-lg border">
                <div className="w-full flex items-center justify-between text-sm font-extrabold">
                    <span>نام فضای کاری</span>
                    <span>تیم طراحی</span>
                </div>
                <div className="w-full flex items-center justify-between text-sm font-extrabold">
                    <span>رنگ فضای کاری</span>
                    <SquareColorfull className={"bg-lime-primary"}/>
                </div>
                <div className="w-full flex items-center justify-between text-sm font-extrabold">
                    <span>اعضا</span>
                    <img src={profile} alt="icon" className="w-8 h-6"/>
                </div>
            </div>
            <Buttons type="submit" classNames="w-full h-10">ساختن فضای کاری</Buttons>

        </div>
    );
};

export default ReviewInfo;