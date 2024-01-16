import React from "react";
import styles from "../../styles/main-header.module.css";
import Link from "next/link";
function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </span>

      <span className={styles.navigation}>
        <Link href="/events">Browse All Events</Link>
      </span>
    </header>
  );
}

export default Header;
