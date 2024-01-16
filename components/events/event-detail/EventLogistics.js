import Image from "next/image";
import AddressIcon from "../../icons/AddressIcon";
import DateIcon from "../../icons/DateIcon";
import classes from "./event-logistics.module.css";
import LogisticsItem from "./logistics-item";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");
  const HandleImgURL = () => {
    return image.includes('http') ? <Image src={`${image}`} className={classes.event_img} alt={imageAlt} width={500} height={500} /> :
      <Image src={`/${image}`} className={classes.event_img} alt={imageAlt} width={500} height={500} />

  }
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <HandleImgURL />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
