import React, { useEffect, useState } from "react";
import data from "data/mocks.json";
import { useParams } from "react-router-dom";
import styles from "styles/components/profile.module.scss";

import UserInfo from "components/Profile/UserInfo";
import StatsList from "components/Profile/Stats/StatsList";
import BarChart from "components/Profile/Charts/BarChart";
import AreaChart from "components/Profile/Charts/AreaChart";

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

  const [userInfos, setUserInfos] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const [userPerformances, setUserPerformances] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getUser(params.id)
        .then((data) => {
          setIsLoading(false);
          setUserInfos(data.data.userInfos);
          setUserStats(data.data.keyData);
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
      {userInfos && <UserInfo firstname={userInfos.firstName} />}

      <div className={styles.profileGrid}>
        <div className={styles.graphsColumn}>
          <BarChart data={userActivities} />

          <div className={styles.graphsMultiColumns}>
            <AreaChart data={userAverageSessions} />
            <div className={styles.graphi}>graph 1</div>
            <div className={styles.graphi}>grah 2</div>
          </div>
        </div>

        <div className={styles.statsColumn}>
          {userStats && <StatsList stats={userStats} />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
