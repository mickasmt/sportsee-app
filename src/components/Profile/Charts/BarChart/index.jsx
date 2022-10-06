import React from "react";
import PropTypes from "prop-types";
import {
  Bar,
  BarChart as BarGraph,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "styles/components/profile/charts/bar.module.scss";

const CustomTooltip = ({ active, payload }) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p>{`${payload[0].value}${payload[0].unit}`}</p>
        <p>{`${payload[1].value}${payload[1].unit}`}</p>
      </div>
    );
  }

  return null;
};

function BarChart({ data }) {
  return (
    <div className={styles.barChartContainer}>
      <div className={styles.headerBarChart}>
        <h3 className={styles.titleHeader}>Activité quotidienne</h3>

        <div className={styles.legendContainer}>
          <div className={styles.legendWrapper}>
            <div className={`${styles.roundLegend} ${styles.weight}`}></div>
            <h4>Poids (kg)</h4>
          </div>
          <div className={styles.legendWrapper}>
            <div className={`${styles.roundLegend} ${styles.calories}`}></div>
            <h4>Calories brûlées (kCal)</h4>
          </div>
        </div>
      </div>

      <ResponsiveContainer width={750} height="100%">
        <BarGraph data={data}>
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500, fill: "#9B9EAC" }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin-2", "dataMax+5"]}
            tickCount="3"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500, fill: "#9B9EAC" }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            hide={true}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            unit="kg"
            fill="var(--darkGray-color)"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            unit="Kcal"
            fill="var(--primary-color)"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarGraph>
      </ResponsiveContainer>
    </div>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    kilogram: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
})),
};

export default BarChart;
