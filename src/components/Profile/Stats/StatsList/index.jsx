import React from "react";
import PropTypes from "prop-types";
import styles from "styles/components/profile/stats.module.scss";
import StatCard from "../StatCard";

import calorieIcon from "assets/icons/energy.svg";
import proteinIcon from "assets/icons/chicken.svg";
import carbohydrateIcon from "assets/icons/apple.svg";
import lipidIcon from "assets/icons/cheeseburger.svg";

const typesStat = [
  {
    name: "calorie",
    nameFr: "Calories",
    icon: calorieIcon,
    unit: "kCal",
    bgColor: "rgba(255, 0, 0, 0.07)",
  },
  {
    name: "protein",
    nameFr: "Protéines",
    icon: proteinIcon,
    unit: "g",
    bgColor: "rgba(74, 184, 255, 0.1)",
  },
  {
    name: "carbohydrate",
    nameFr: "Glucides",
    icon: carbohydrateIcon,
    unit: "g",
    bgColor: "rgba(249, 206, 35, 0.1)",
  },
  {
    name: "lipid",
    nameFr: "Lipides",
    icon: lipidIcon,
    unit: "g",
    bgColor: "rgba(253, 81, 129, 0.1)",
  },
];

function getTypeStat(string) {
  const type = string.replace("Count", "");
  return typesStat.find((item) => item.name === type);
}

function StatsList({ stats }) {
  const namesStats = Object.keys(stats);
  const valuesStats = Object.values(stats);

  return (
    <div className={styles.statsList}>
      {namesStats.map((stat, idx) => {
        return (
          <StatCard
            key={"stat-" + idx}
            type={getTypeStat(stat)}
            value={valuesStats[idx]}
          />
        );
      })}
    </div>
  );
}

StatsList.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default StatsList;
