import React from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import styles from "styles/components/layout.module.scss"

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideNav />
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
