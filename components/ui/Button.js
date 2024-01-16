import React from "react";
import classes from "../../styles/button.module.css";
import Link from "next/link";

function Button({ children, link, onClick }) {
  if (!link) {
    return (
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
}

export default Button;
