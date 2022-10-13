import React from "react";
import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "styles/components/profile/performances.module.scss";


/**
 * Performances component. Contains RadarChart
 * @param {Object} kind List of kind french words for the chart
 * @param {Array} data Data of user performances
 * @returns {React.ReactElement}
 */
function Performances({ kind, data }) {
  return (
    <div className={styles.radarContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={80}
          data={data}
        >
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFF"
            tickLine={false}
            tickFormatter={(kindNumber) => kind[kindNumber] }
          />
          <PolarGrid radialLines={false} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Performances.propTypes = {
  /** List of kind french words for the chart */
  kind: PropTypes.object.isRequired,
  /** Array of objects : user performances */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** Value for one kind */
      value: PropTypes.number.isRequired,
      /** Number for get kind word in list */
      kind: PropTypes.number.isRequired,
    })
  ),
};

export default Performances;
