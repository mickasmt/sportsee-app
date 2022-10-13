import React from "react";
import PropTypes from "prop-types";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "styles/components/profile/averageSessions.module.scss";


/**
 * Custom tooltip for AreaChart
 * @param {boolean} active Return true if user is hovered over on the graph
 * @param {array} payload Array of current location data which is hovered over by the user on the graph
 * @returns {(React.ReactElement|null)} Return tooltip if user is on the AreaChart else return null
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p>{payload[0].value} min</p>
      </div>
    );
  }

  return null;
};


/**
 * AverageSessions component. Contains AreaChart
 * @param {data} data Data of user average sessions
 * @returns {React.ReactElement}
 */
function AverageSessions({ data }) {
  return (
    <div className={styles.averageContainer}>
      <div className={styles.averageTitle}>
        <h3>Durée moyenne des <br/> sessions</h3>
      </div>
      <ResponsiveContainer>
        <AreaChart
          outerRadius={90}
          data={data}
          margin={{
            top: 50,
            left: 10,
            right: 10,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500, fill: "#fff", opacity: 0.5 }}
            allowDataOverflow={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-8", "dataMax+25"]}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth="2"
            // fill="rgba(255,255,255,.1)"
            fill="rgba(255,255,255,0)"
            activeDot={{
              stroke: "rgba(255,255,255,.3)",
              strokeWidth: 10,
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.propTypes = {
  /** Boolean if user is hovered over the chart */
  active: PropTypes.bool,
  /** Array data for the current location that is hovered over */
  payload: PropTypes.array,
};

AverageSessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** Day number of date */
      day: PropTypes.string.isRequired,
      /** Length session for the day */
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default AverageSessions;
