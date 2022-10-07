import React from "react";
import PropTypes from "prop-types";
import {
  Area,
  AreaChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "styles/components/profile/averageSessions.module.scss";

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

function AverageSessions({ data }) {
  return (
    <div className={styles.averageContainer}>
      <div className={styles.averageTitle}>
        <h3>Durée moyenne des sessions</h3>
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
            // height={20}
            tick={{ fontSize: 12, fontWeight: 500, fill: "#fff", opacity: 0.5 }}
            tickFormatter={(day) => {
              const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
              return weekdays[day - 1];
            }}
            allowDataOverflow={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-8", "dataMax+25"]}
          />
          {/* <Line type="monotone" dataKey="sessionLength" /> */}
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

AverageSessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default AverageSessions;
