import refresh from "/componentT/refresh.svg"
import search from "/componentT/search.svg";
import filter from "/componentT/filter.svg";

const Toolbar = () => {
    return (
        <main className="w-[1034px] h-8 flex items-center justify-between text-xs">
            <div className="flex items-center gap-x-4">
                <div className="flex items-center">
                    <input type="text" placeholder="جستجو بین تسک ها"
                           className="w-[200px] text-xs pr-12 py-3 outline-none"/>
                    <img src={search} alt="icon" className="absolute pr-4"/>
                </div>
                <div className="w-[2px] h-[22px] bg-[#999999]"/>
                <div className="flex gap-x-1.5 items-center justify-center pr-6">
                    <img src={filter} alt="icon"/>
                    <span>فیلترها</span>
                </div>
                <div className="text-blue-primary bg-blue-secondary px-3 py-1 rounded-sm">دسته‌بندی‌شده با:
                    وضعیت
                </div>
            </div>
            <div
                className="flex items-center justify-center gap-x-1.5 border-2 border-brand-primary px-2 py-1 rounded-lg cursor-pointer hover:bg-brand-primary/10">
                <img src={refresh} alt="icon"/>
                <span>بازگردانی تسک های آرشیو شده</span>
            </div>
        </main>
    );
};

export default Toolbar;