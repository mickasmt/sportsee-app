import React from "react";
import PropTypes from "prop-types";
import {
  Area,
  AreaChart as AreaGraph,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "styles/components/profile/charts/area.module.scss";

function AreaChart({ data }) {
  return (
    <div className={styles.areaChartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaGraph
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaGraph>
      </ResponsiveContainer>
    </div>
  );
}

AreaChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default AreaChart;
