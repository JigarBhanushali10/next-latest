import React from "react";
import classes from "../../styles/event-list.module.css";
import EventItem from "./EventItem";

function EventList({ items, deleteEvent }) {





  return (
    <ul className={classes.list}>
      {items?.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            address={item.address}
            date={item.date}
            deleteEvent={deleteEvent}
          ></EventItem>
        );
      })}
    </ul>
  );
}

export default EventList;
