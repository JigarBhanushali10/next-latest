import React, { useRef } from "react";
import classes from "../../../styles/events-search.module.css";
import Button from "../../ui/Button";

function EventsSearch({ onSearch }) {
  const yearFilter = useRef();
  const monthFilter = useRef();
  function submitHandler(event) {
    event.preventDefault();

    onSearch({
      year: yearFilter.current.value,
      month: monthFilter.current.value,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearFilter}>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
            <option value={"2023"}>2023</option>
            <option value={"2024"}>2024</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthFilter}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
      <Button link={'events/add'}>Add Event</Button>
    </form>
  );
}

export default EventsSearch;
