import React from "react";
import { useParams } from "react-router-dom";
import data from "data/mocks.json";
import styles from "styles/components/profile.module.scss"

import UserInfo from "components/Profile/UserInfo";
import StatsList from "components/Profile/Stats/StatsList";

function Profile() {
  // get ID from url
  const params = useParams();


  return (
    <div className={styles.profileContainer}>
      <UserInfo firstname={"Thomas"} />

      <div className={styles.profileGrid}>
        <div className={styles.graphsColumn}>diagramme</div>
        <div className={styles.statsColumn}>
          <StatsList stats={data.data.keyData} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
