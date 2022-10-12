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
  kind: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ),
};

export default Performances;
