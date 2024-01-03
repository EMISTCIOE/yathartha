import "../styles/schedule.css";

interface Event {
  id: number;
  day: number;
  time: string;
  title: string;
  description: string[];
  setting: string;
}

const eventsData:Event[] = [
  {
    id: 1,
    day: 1,
    time: "10:00 AM - 4:00 PM",
    title: "1. Thapathali Tech Fest Project Exhibition: For Sustainability",
    description: [
      "Separate registration required; Registration limited to 50. Participants will have free access to Tech Fest. free access to Tech Fest only applies to those who are registered and approved by the event managers.",
      "Managed by: , Communication Team, Ecast",
    ],
    setting: "Event-Setting: Online",
  },
  {
    id: 2,
    day: 1,
    time: "10:00 AM - 4:00 PM",
    title: "2. Thapathali Tech Fest Project Exhibition: For Sustainability",
    description: [
      "Separate registration required; Registration limited to 50. Participants will have free access to Tech Fest; free access to Tech Fest only applies to those who are registered and approved by the event managers.",
      "Managed by: , Communication Team, Ecast",
    ],
    setting: "Event-Setting: On-site,Thapathali Campus",
  },
  {
    id: 3,
    day: 2,
    time: "10:00 AM - 4:00 PM",
    title: "3. Thapathali Tech Fest Project Exhibition: For Sustainability",
    description: [
      "Separate registration required; Registration limited to 50. Participants will have free access to Tech Fest; free access to Tech Fest only applies to those who are registered and approved by the event managers.",
      "Managed by: , Communication Team, Ecast",
    ],
    setting: "Event-Setting: On-site,Thapathali Campus",
  },
  {
    id: 4,
    day: 2,
    time: "10:00 AM - 4:00 PM",
    title: "4.Thapathali Tech Fest Project Exhibition: For Sustainability",
    description: [
      "Separate registration required; Registration limited to 50. Participants will have free access to Tech Fest; free access to Tech Fest only applies to those who are registered and approved by the event managers.",
      "Managed by: , Communication Team, Ecast",
    ],
    setting: "Event-Setting: On-site,Thapathali Campus",
  },
];


const groupEventsByDay = (events: Event[]) => {
  const groupedEvents: { [day: number]: Event[] } = {};
  events.forEach((event) => {
    if (!groupedEvents[event.day]) {
      groupedEvents[event.day] = [];
    }
    groupedEvents[event.day].push(event);
  });
  return groupedEvents;
};

const Schedule: React.FC = () => {
  const groupedEvents = groupEventsByDay(eventsData);


  return (
    <>
      <div className="schedule">

        <div className="flex flex-col justify-evenly items-center"style={{ paddingTop: '50px' }}>
            <h1 className="text-theme text-5xl font-bold">Schedule</h1>
            <hr className="w-[10rem] border-2 border-theme-green my-8 rounded-xl" />
        </div>

        {Object.entries(groupedEvents).map(([day, events]) => (
          <div key={`day-${day}`} className="day-header">
            <h2 className="sub-heading text-theme-red text-xl font-bold">Day {day}</h2>
            {events.map((event) => (
              <div key={event.id} className="event-details">
                <div className="left-column">
                  <div className="time">{event.time}</div>
                  <div className="event-title">{event.title}</div>
                </div>
                <div className="right-column">
                  <div className="description">
                    {event.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="location">{event.setting}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;

