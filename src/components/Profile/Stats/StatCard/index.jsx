import React from "react";
import PropTypes from "prop-types";
import styles from "styles/components/profile/stats.module.scss";

function StatCard({ type, value }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.iconContainer} style={{ backgroundColor: type.bgColor }}>
        <img src={type.icon} alt={"logo-" + type.name} />
      </div>
      <div className={styles.statInfos}>
        <h4>
          {value}
          {type.unit}
        </h4>
        <p>{type.nameFr}</p>
      </div>
    </div>
  );
}

StatCard.propTypes = {
  type: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatCard;
