import React from "react";
import PropTypes from "prop-types";
import styles from "styles/components/profile/user-info.module.scss";

/**
 * User Info component
 * @param {string} firstname Firstname of the user
 * @returns {React.ReactElement}
 */
function UserInfo({ firstname }) {
  return (
    <div className={styles.headerInfo}>
      <h1>
        Bonjour <span>{firstname}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

UserInfo.propTypes = {
  /** firstname of user  */
  firstname: PropTypes.string.isRequired,
};

export default UserInfo;
