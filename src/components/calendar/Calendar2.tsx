import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import moment from "moment";
import "moment/locale/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import jMoment from "moment-jalaali";
import faIR from "date-fns/locale/fa-IR";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const Calendar2 = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
  };

  const formatDate = (date: Date | moment.Moment) => {
    return jMoment(date).locale('fa').format('YYYY/MM/DD');
  };
  

  return (
    <div dir="ltr">
      <DateRangePicker
        weekStartsOn={6}
        locale={faIR}
        ranges={state}
        onChange={handleSelect}
        dateDisplayFormat={"yyyy/mm/dd"}
        renderStaticRangeLabel={(range) =>
          `${formatDate(range.startDate)} - ${formatDate(range.endDate)}`
        }
      />
      <div>
        <p>
          Start Date:{" "}
          {state[0].startDate ? formatDate(state[0].startDate) : "-"}
        </p>
        <p>End Date: {state[0].endDate ? formatDate(state[0].endDate) : "-"}</p>
      </div>
    </div>
  );
};

export default Calendar2;
