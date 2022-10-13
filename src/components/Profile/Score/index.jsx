import PropTypes from "prop-types";
import {
  RadialBarChart,
  ResponsiveContainer,
  RadialBar,
  Legend,
  PolarAngleAxis,
} from "recharts";
import styles from "styles/components/profile/score.module.scss";


/**
 * Score component. Contains RadialBarChart
 * @param {number} score Float number of percent of score user
 * @returns {React.ReactElement}
 */
function Score({ score }) {
  /**
   * Custom legend for the RadialBarChart
   * @returns {React.ReactElement} Return score in percent format. ex: 30%
   * 
   */
  const customLegend = () => {
    return (
      <div className={styles.customLegend}>
        <span className={styles.percent}>{score * 100}%</span>
        <p>
          de votre
          <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <div className={styles.scoreContainer}>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="75%"
          outerRadius="75%"
          barSize={10}
          data={[
            {
              fill: "#fff",
            },
          ]}
          startAngle={90}
          endAngle={(360 * score) + 90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            circle
            minAngle={300}
            background={{ fill: "var(--primary-color)" }}
            Clockwise={false}
            dataKey={score}
            cornerRadius={10}
          />

          <text
            x={30}
            y={33}
            fontWeight={500}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Score
          </text>

          <Legend
            content={customLegend}
            layout="horizontal"
            verticalAlign="middle"
            width={200}
            wrapperStyle={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  /** Float number of percent of score user */
  score: PropTypes.number.isRequired,
};

export default Score;
