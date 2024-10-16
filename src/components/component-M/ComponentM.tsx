import Calendar from "../../components/calendar/Calendar";
import Calendar2 from "../../components/calendar/Calendar2";
// import Calendar3 from "../../components/calendar/Calendar3";
import Calendar4 from "../../components/calendar/Calendar4";
import Calendar5 from "../../components/calendar/Calendar5";
import Calendar6 from "../../components/calendar/Calendar6";
import Filter from "../filter/Filter";
const MohammadPage: React.FC = () => {
  return (
    <div>
      <Filter></Filter>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      <Calendar></Calendar>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      <Calendar2></Calendar2>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      {/* <Calendar3 boards={[]}></Calendar3> */}
      {/* <div className="flex h-screen items-center justify-center"></div> */}
      {/* <hr className="border-t-2 border-black font-bold" /> */}
      <Calendar4></Calendar4>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      <Calendar5></Calendar5>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      <Calendar6></Calendar6>
      <div className="flex h-screen items-center justify-center"></div>
      <hr className="border-t-2 border-black font-bold" />
      {/* <div className="flex h-screen items-center justify-center"></div> */}
      {/* <hr className="border-t-2 border-black font-bold" /> */}
    </div>
  );
};

export default MohammadPage;
