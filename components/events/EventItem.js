import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "../../styles/event-item.module.css";
import AddressIcon from "../icons/AddressIcon";
import ArrowIcon from "../icons/ArrowIcon";
import DateIcon from "../icons/DateIcon";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import Button from "../ui/Button";

function EventItem({ title, date, image, address, id, deleteEvent }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");
  const HandleImgURL = () => {
    return image.includes('http') ? <Image src={`${image}`} className={classes.event_img} alt={title} width={500} height={500} /> :
      <Image src={`/${image}`} className={classes.event_img} alt={title} width={500} height={500} />

  }

  const handleDeleteEvent = () => {
    console.log(id);
    deleteEvent(id)
  }

  return (
    <li className={classes.item}>
      <HandleImgURL />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon></DateIcon>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon></AddressIcon>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <div className={classes.actions_items}>
            <span className={classes.delete_icon} onClick={handleDeleteEvent}  >
              <DeleteIcon />
            </span>
            <Link href={"/events/edit/" + id}>
              <span className={classes.edit_icon}   >
                <EditIcon />
              </span>
            </Link>
          </div>

          <Button link={`/events/${id}`}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowIcon></ArrowIcon>
            </span>
          </Button>


        </div>
      </div>

    </li>
  );
}

export default EventItem;
