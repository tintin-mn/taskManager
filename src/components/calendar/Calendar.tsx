import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const Calendar = () => {
  return (
    <div>
      <div className="container max-w-[1020px]">
        <FullCalendar
        headerToolbar={{
          right: 'today prev,next',
          center: 'title',
          left: ''
        }}
        titleFormat={{ year: 'numeric', month: 'long'}}
          plugins={[dayGridPlugin]}
          buttonText={{
            today: "امروز",
          }}
          locale="fa"
          timeZone="local"
          direction="rtl"
          initialView="dayGridMonth"
          firstDay={6}
          fixedWeekCount={false}
          // initialDate={"2016-02-20"}
        />
      </div>
    </div>
  );
};

export default Calendar;
////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import moment from "moment";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(moment());

//   const handlePrev = () => {
//     const newDate = currentDate.clone().subtract(20, "days");
//     setCurrentDate(newDate);
//   };

//   const handleNext = () => {
//     const newDate = currentDate.clone().add(20, "days");
//     setCurrentDate(newDate);
//   };

//   const visibleRange = function(currentDate: string | number) {
//     // Generate a new date for manipulating in the next step
//     const startDate = new Date(currentDate.valueOf());
//     const endDate = new Date(currentDate.valueOf());

//     // Adjust the start & end dates, respectively
//     startDate.setDate(startDate.getDate() - 1); // One day in the past
//     endDate.setDate(endDate.getDate() + 2); // Two days into the future

//     return { start: startDate, end: endDate };
//   }

//   return (
//     <div>
//       <div className="container max-w-[1020px]">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: ""
//           }}
//           titleFormat={{ year: "numeric", month: "long" }}
//           buttonText={{
//             today: "امروز"
//           }}
//           direction="ltr"
//           initialView="dayGridMonth"
//           fixedWeekCount={false}
//           visibleRange={visibleRange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Calendar;





///////////////////////////////////////////////////////////////////
// import Fullcalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { useMantineTheme } from '@mantine/core';
// import { useAppSelector } from '../../data/reduxHooks';
// import CreateTaskCalendarModal from '../CreateTaskCalendarModal';
// import { useDisclosure } from '@mantine/hooks';
// import {  useState } from 'react';

// const Calendar = () => {
//   const [taskDate, setTaskDate] = useState('');
//   const boards: any = useAppSelector((state) => state.boards.projectBoards);
//   const [opened, { open, close }] = useDisclosure(false);
//   const themecolor = useMantineTheme();
//   const color = themecolor.colors[themecolor.primaryColor];
//   const allTasks = boards?.reduce((accumulator: any, currentValue: any) => {
//     return accumulator.concat(currentValue.tasks);
//   }, []);

//  store all tasks for passing to calendar as event
//   const events = allTasks.map((task: any) => {
//     const date = task.deadline?.split('T')[0];
//     return { title: task.name, date };
//   });

// passing taskdate to add task modal
//   const handleDateClick = (arg: any) => {
//     setTaskDate(arg.dateStr);
//     open();
//   };
//   return (
//     <>
//       <CreateTaskCalendarModal opened={opened} onClose={close} taskDate={taskDate} />
//       <Fullcalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         locale="fa"
//         timeZone="local"
//         direction="rtl"
//         firstDay={6}
//         dateClick={handleDateClick}
//         headerToolbar={{
//           start: 'today prev,next',
//           center: 'title',
//           end: ''
//         }}
//         buttonText={{
//           today: 'امروز',
//           month: 'ماه',
//           week: 'هفته',
//           day: 'روز'
//         }}
//         events={events}
//         eventColor={color[8]}
//         eventTextColor={color[0]}
//         height="620px"
//       />
//     </>
//   );
// };

// export default Calendar;
