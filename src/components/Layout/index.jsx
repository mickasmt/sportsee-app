import React from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import styles from "styles/components/layout.module.scss"

/**
 * Layout component for the app
 * @param {React.ReactNode} children 
 * @returns {React.ReactElement}
 */
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
