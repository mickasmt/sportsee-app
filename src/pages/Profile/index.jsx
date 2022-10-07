import React, { useEffect, useState } from "react";
import data from "data/mocks.json";
import { useParams } from "react-router-dom";
import styles from "styles/components/profile.module.scss";

import UserInfo from "components/Profile/UserInfo";
import StatsList from "components/Profile/Stats/StatsList";
import Activity from "components/Profile/Activity";
import Score from "components/Profile/Score";
import AverageSessions from "components/Profile/AverageSessions";
import Performances from "components/Profile/Performances";

import {
  getUser,
  getUserActivities,
  getUserAverageSessions,
  getUserPerformances,
} from "data/api";
import Error from "components/Error";

function Profile() {
  const params = useParams();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const [userPerformances, setUserPerformances] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getUser(params.id)
        .then((data) => {
          setUser(data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserActivities(params.id)
        .then((data) => {
          setIsLoading(false);
          setUserActivities(data.data.sessions);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserAverageSessions(params.id)
        .then((data) => {
          setIsLoading(false);
          setUserAverageSessions(data.data.sessions);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserPerformances(params.id)
        .then((data) => {
          // console.log(data);
          setIsLoading(false);
          setUserPerformances(data.data.data);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 600);
  }, []);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <Error />;

  return (
    <div className={styles.profileContainer}>
      {user && <UserInfo firstname={user.userInfos.firstName} />}

      <div className={styles.profileGrid}>
        <div className={styles.graphsColumn}>
          <Activity data={userActivities} />

          <div className={styles.graphsMultiColumns}>
            <AverageSessions data={userAverageSessions} />
            <Score score={user.todayScore} />

            <div className={styles.graphi}></div>
            <div className={styles.graphi}></div>
            
          </div>
        </div>

        <div className={styles.statsColumn}>
          {user && <StatsList stats={user.keyData} />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
