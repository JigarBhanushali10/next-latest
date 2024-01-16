import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EventContent from "../../../components/events/event-detail/EventContent";
import EventLogistics from "../../../components/events/event-detail/EventLogistics";
import EventSummary from "../../../components/events/event-detail/EventSummary";
import { API_BASE_URL } from "../../../utils/config";

function Event() {
  const router = useRouter();
  const [event, setEvent] = useState()


  const eventId = router.query.eventId;
  useEffect(() => {
    console.log(eventId);
    if (eventId) {

      fetch(`/api/events/${eventId}`).then((res) => {
        return res.json()
      }).then((res) => {
        setEvent(res)
      })
    }

  }, [router.query.eventId])

  if (!event) {
    return <h3>No Event Found</h3>;
  }
  return (
    <>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default Event;
