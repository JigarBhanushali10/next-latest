import { useEffect, useState } from "react";
import EventList from "../components/events/EventList";
function Home() {
  const [featuredEvents, setFeaturedEvents] = useState()


  const deleteEvent = (id:string) => {
    let text = "Click on Yes to delete Event";
    if (confirm(text) == true) {
      fetch(`/api/events/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res);
        getFeaturedEvents()
      })
    } else {
      return
    }


  }


  const getFeaturedEvents = () => {
    fetch(`/api/events`, {
      method: 'GET',
      headers: {
        'isFeatured': true,
      } as any,
    }).then((res) => {
      return res.json()
    }).then((res) => {
      setFeaturedEvents(res.events)
    })
  }
  useEffect(() => {
    getFeaturedEvents()

  }, [])
  return (
    <div>
      <EventList items={featuredEvents} deleteEvent={deleteEvent}></EventList>
    </div>
  );
}

export default Home;
