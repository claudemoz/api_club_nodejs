import { useEffect, useRef } from "react";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events: EventInput[] = [
  {
    title: "HITEMA FC vs FC Rival",
    start: "2024-11-20T15:00:00",
    end: "2024-11-20T17:00:00",
    extendedProps: {
      home: "HITEMA FC",
      away: "FC Rival",
      location: "Stade Municipal",
    },
  },
  {
    title: "AS Local vs HITEMA FC",
    start: "2024-11-27T16:30:00",
    end: "2024-11-27T18:30:00",
    extendedProps: {
      home: "AS Local",
      away: "HITEMA FC",
      location: "Complexe Sportif",
    },
  },
  {
    title: "HITEMA FC vs US Voisine",
    start: "2024-12-04T15:00:00",
    end: "2024-12-04T17:00:00",
    extendedProps: {
      home: "HITEMA FC",
      away: "US Voisine",
      location: "Stade Municipal",
    },
  },
];

export default function Calendar() {
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    // Récupération de l'instance de FullCalendar après le montage
    const calendar = calendarRef.current;
    if (calendar) {
      // Ajustement de la hauteur du calendrier pour qu'il remplisse toute la page
      calendar.getApi().setOption("height", "100vh");
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#c23616] h-full p-4">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
        }}
        eventContent={(info) => (
          <div>
            <div className="font-medium">{info.event.title}</div>
            <div className="text-sm">
              {info.event.extendedProps.home} vs {info.event.extendedProps.away}
            </div>
            <div className="text-sm">{info.event.extendedProps.location}</div>
          </div>
        )}
      />
    </div>
  );
}
