import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const EventCalendar = () => {
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

export default EventCalendar;