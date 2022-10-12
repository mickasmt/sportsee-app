import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "styles/components/profile.module.scss";

import Error from "components/Error";
import Activity from "components/Profile/Activity";
import AverageSessions from "components/Profile/AverageSessions";
import Performances from "components/Profile/Performances";
import Score from "components/Profile/Score";
import StatsList from "components/Profile/Stats/StatsList";
import UserInfo from "components/Profile/UserInfo";

import {
  getUser,
  getUserActivities,
  getUserAverageSessions,
  getUserPerformances,
} from "data/api";

import {
  userDataFormat,
  userActivitiesFormat,
  userPerformancesFormat,
  userAverageSessionsFormat,
} from "utils/classes/UserModel";

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
          const formattedUserClass = new userDataFormat(data.data);
          setUser(formattedUserClass);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserActivities(params.id)
        .then((data) => {
          setIsLoading(false);
          const formattedUserActivities = new userActivitiesFormat(data.data);
          setUserActivities(formattedUserActivities);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserAverageSessions(params.id)
        .then((data) => {
          setIsLoading(false);
          const formattedUserAverageSessions = new userAverageSessionsFormat(data.data);
          setUserAverageSessions(formattedUserAverageSessions);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      getUserPerformances(params.id)
        .then((data) => {
          setIsLoading(false);
          const formattedUserPerformances = new userPerformancesFormat(data.data);
          setUserPerformances(formattedUserPerformances);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setIsLoading(false);
        });
    }, 500);
  }, []);

  
  if (isLoading) return <div>Chargement...</div>;
  if (error) return <Error />;

  return (
    <div className={styles.profileContainer}>
      {user && <UserInfo firstname={user.userInfos.firstName} />}

      <div className={styles.profileGrid}>
        <div className={styles.graphsColumn}>
          {userActivities && <Activity data={userActivities.sessions} />}

          <div className={styles.chartCardsContainer}>
            {userAverageSessions && (
              <AverageSessions data={userAverageSessions.sessions} />
            )}
            {userPerformances && (
              <Performances
                kind={userPerformances.kind}
                data={userPerformances.data}
              />
            )}
            {user && <Score score={user.todayScore} />}
          </div>
        </div>

        {/* Right column */}
        {user && <StatsList stats={user.keyData} />}
      </div>
    </div>
  );
}

export default Profile;
