import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isclick, setisClick] = useState(false);
  const handleClick = () => {
    setisClick(!isclick);
  };
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>VARDHAN</h1>
        </div>
        <div className={isclick ? styles.navbar_active : styles.navbar}>
          <Link href="/">
            <a className={styles.nav_item} onClick={handleClick}>
              HOME
            </a>
          </Link>
          <Link href="/#about">
            <a className={styles.nav_item} onClick={handleClick}>
              ABOUT
            </a>
          </Link>
          <Link href="/#contact">
            <a className={styles.nav_item} onClick={handleClick}>
              CONTACT
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.nav_item} onClick={handleClick}>
              PROJECTS
            </a>
          </Link>
        </div>
        <div className="hamburger">
          <button
            type="submit"
            className="navbar_hamburger"
            onClick={handleClick}
          >
            <i className={isclick ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
