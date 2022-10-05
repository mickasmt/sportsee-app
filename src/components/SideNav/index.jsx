import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/components/sidebar.module.scss";

import yoga from "assets/icons/yoga.svg";
import swimming from "assets/icons/swimming.svg";
import bike from "assets/icons/bike.svg";
import dumbbell from "assets/icons/dumbbell.svg";

const sideIconLinks = [
  { name: "yoga", icon: yoga, url: "/" },
  { name: "swim", icon: swimming, url: "/" },
  { name: "bike", icon: bike, url: "/" },
  { name: "dumb", icon: dumbbell, url: "/" },
];

function SideNav() {
  return (
    <div className={styles.sidenav}>
      <div className={styles.container}>
        <div>
          {sideIconLinks.map((link) => (
            <Link className={styles.links} to={link.url} key={link.name}>
              <img
                className="header-logo"
                src={link.icon}
                alt={'side-logo-'+link.name}
              />
            </Link>
          ))}
        </div>
        <div className={styles.copyright}>Copyright, SportSee 2020</div>
      </div>
    </div>
  );
}

export default SideNav;
