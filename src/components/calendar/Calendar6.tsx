import { useState } from "react";
import { DatePicker } from "zaman";
import { Calendar, CalendarProvider } from "zaman";
// function App() {
//   return (
//     <DatePicker onChange={(e) => console.log(e.from, e.to)} range />
//   )
// }

export default function Example() {
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <div className="border-4">
      {/* <CalendarProvider>
        <Calendar
          defaultValue={calendarValue}
          onChange={(e) => setCalendarValue(new Date(e.value))}
        />
      </CalendarProvider>
      fekfbwjlbgwjgb
      <DatePicker onChange={(e) => console.log(e.value)} /> */}
      <DatePicker onChange={(e) => console.log(e.from, e.to)} range />
    </div>
  );
}
