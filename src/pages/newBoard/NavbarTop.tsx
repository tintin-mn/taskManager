import ListIcon from "/public/componentT/list.svg";
import ColumnListIcon from "/public/componentT/column-list.svg";
import CalendarIcon from "/public/componentT/calendar.svg";
import ShareIcon from "../../../public/componentT/ShareIcon.tsx";


interface NavbarTopProps {
  onComponentChange: (type: string) => void;
  activeComponent: string;
}

const NavbarTop: React.FC<NavbarTopProps> = ({
  onComponentChange,
  activeComponent,
}) => {
  const handleItemClick = (type: string) => {
    onComponentChange(type);
  };
  const items = [
    {
      id: 1,
      title: "نمایش لیستی",
      icon: ListIcon,
      type: "ListShow",
    },
    {
      id: 2,
      title: "نمایش ستونی",
      icon: ColumnListIcon,
      type: "ColumnShow",
    },
    {
      id: 3,
      title: "تقویم",
      icon: CalendarIcon,
      type: "EventCalendar",
    },
  ];

  return (
        <div
            className="w-[1034px] h-8 flex items-center justify-between border-b-[0.5px] border-b-[#AAAAAA] py-6 mb-4 mr-2">
          <div className="flex gap-x-4 w-full">
            <p className="font-extrabold text-xl">پروژه اول</p>
            {items.map((item) => {
              return (
                  <div
                      className="flex flex-row justify-center gap-x-4"
                      key={item.id}
                  >
                    <div className="w-[2px] h-[22px] bg-[#999999]"/>
                    <div
                        onClick={() => handleItemClick(item.type)}
                        className={`${
                            activeComponent === item.type
                                ? "flex justify-center gap-x-[5px] cursor-pointer pb-6 group text-brand-primary font-extrabold border-b-[2px] border-b-brand-primary "
                                : "flex justify-center gap-x-[5px] cursor-pointer pb-6 group hover:text-brand-primary hover:font-extrabold border-b-[2px] border-b-transparent hover:border-b-brand-primary "
                        }`}
                    >
                      <img
                          src={item.icon}
                          alt="icon"
                          className="w-6 h-6 group-hover:stroke-brand-primary"
                      />
                      <p className="text-base hover:font-extrabold">{item.title}</p>
                    </div>

                  </div>
              );
            })}
          </div>
        <div
            className="flex justify-center gap-x-[5px] cursor-pointer pb-6 group hover:text-brand-primary font-extrabold border-b-[2px] border-b-transparent hover:border-b-brand-primary text-nowrap"
        >
          <ShareIcon className="group-hover:stroke-brand-primary"/>
          <p>اشتراک گذاری</p>
        </div>
        </div>
  );
};

export default NavbarTop;
