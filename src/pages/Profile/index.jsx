import React from "react";
import data from "data/mocks.json";
import { useParams } from "react-router-dom";
import styles from "styles/components/profile.module.scss"

import UserInfo from "components/Profile/UserInfo";
import StatsList from "components/Profile/Stats/StatsList";
import BarChart from "components/Profile/Charts/BarChart";

function Profile() {
  // get ID from url
  // const params = useParams();

  const userStats = data.data.keyData;
  const userActivity = data.activity.data.sessions;

  return (
    <div className={styles.profileContainer}>
      <UserInfo firstname={"Thomas"} />

      <div className={styles.profileGrid}>
        <div className={styles.graphsColumn}>
          <BarChart data={userActivity} />
        </div>

        <div className={styles.statsColumn}>
          <StatsList stats={userStats} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
