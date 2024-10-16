import DatePickerProvider, {
  Title,
  Header,
  WeekDays,
  DaySlots,
} from "headless-react-datepicker";

export default function Example() {
  return (
    <div>
      <DatePickerProvider
        calendar="persian"
        config={{
          dayFormat: "numeric",
          locale: "fa-IR",
          otherDaysSelectable: false,
          showOtherDays: false,
          weekStartsOn: "saturday",
          weekdayFormat: "narrow",
          weekends: ["thursday", "friday"],
        }}
        // initialValue={new Date("2025-04-16T20:30:00.000Z")}
        isRange
        
        onChange={function Ya() {}}
      >
        <Title />
        <Header
          monthSelectStyles={{
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
            color: "#000",
            padding: "5px",
          }}
          yearSelectStyles={{
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
            color: "#000",
            padding: "5px",
          }}
        />
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </div>
  );
}
