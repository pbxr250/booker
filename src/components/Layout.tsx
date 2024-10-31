  import {
    CalendarReserved,
    CalendarSelected,
  } from "@demark-pro/react-booking-calendar";
  //import "./index.css";

  import { _reserved } from "../tests/testdata"
  import { tgWebApp } from "../utils/webapp"
  
  import { EventsCalendar } from "./EventsCalendar";
  import { useState } from "react";
  import { startOfToday, format, isSameDay } from "date-fns";
  
  const userdata = tgWebApp.initData as string
  const oneDay = 86400000;
  const today = new Date().getTime() + oneDay;
  
  const reserved: CalendarReserved[] = _reserved


  const reserved1: CalendarReserved[] = Array.from({ length: 3 }, (_, i) => {
    //const daysCount = Math.floor(Math.random() * (7 - 4) + 3);
    const startDate = new Date(today + oneDay * 8 * i);
    return {
      startDate,
      endDate: new Date(startDate),
    };
  });

  
  export default function Layout() {
    const [selected, setSelected] = useState<CalendarSelected[]>([startOfToday(),null]);
    //console.log(selected)
  
    const [selectedDate] = selected;
    //console.log(selected)
    //console.log(selectedDate)

    let tg
    try {
      tg = window.Telegram.WebApp 
      } catch (e) {
      console.log('Error window.Telegram.WebApp')
      }
  
    return (
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          React booking calendar
        </h1>
        <h3 className="text-lg font-semibold text-center">
          EventsCalendar + tailwind example
        </h3>
        <EventsCalendar
          selected={selected}
          reserved={reserved}
          onChange={setSelected}
          className="drop-shadow-xl my-3"
        />
  
        <h3 className="text-lg font-semibold">
          Events of {selectedDate && format(selectedDate, "dd MMMM")}:
        </h3>
        {selectedDate &&
          reserved
            .filter(
              (r) =>
                isSameDay(selectedDate, r.startDate) ||
                isSameDay(selectedDate, r.endDate),
            )
            .map((event) => (
              <p>
                {format(event.startDate, "dd-MM-yyyy")} -{" "}
                {format(event.endDate, "dd-MM-yyyy")}
              </p>
            ))}

        <h3 className="text-lg font-semibold">
          Console log: User data:
        </h3>
        <h3 className="text-lg font-semibold">
          {userdata}
        </h3>
      </div>
    );
  }
  