import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search/EventsSearch";
import { API_BASE_URL } from "../../utils/config";

function EventDetail() {
  const router = useRouter();

  const [allEvents, setAllEvents] = useState()

  const deleteEvent = (id) => {

    let text = "Click on Yes to delete Event";
    if (confirm(text) == true) {

      fetch(`/api/events/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res);
        getAllEvents()
      })
    } else {
      return
    }
  }


  const getAllEvents = () => {

    fetch(`/api/events`).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res.events);
      setAllEvents(res.events)
    })
  }
  useEffect(() => {
    getAllEvents()
  }, [])

  function onSearch({ month, year }) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={onSearch}></EventsSearch>
      <EventList items={allEvents} deleteEvent={deleteEvent}></EventList>
    </>
  );
}

export default EventDetail;
