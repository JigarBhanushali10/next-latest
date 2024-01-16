import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventList from "../../components/events/EventList";

function FilteredEvent() {
  const [filteredEvents, setFilteredEvents] = useState([])
  const router = useRouter();
  const filteredEvent = router.query.FilteredEvent as string[];
  useEffect(() => {
    if (filteredEvent) {
      fetch(`/api/events/${filteredEvent.join('/')}`).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res?.events);
        setFilteredEvents(res)
      })
    }

  }, [])
  if (filteredEvent) {
    console.log(filteredEvent);
    if (!filteredEvents.length) {
      return <h3>No Event Found</h3>;
    } else {
      return <EventList items={filteredEvents} deleteEvent={undefined}></EventList>;
    }
  }
}

export default FilteredEvent;
