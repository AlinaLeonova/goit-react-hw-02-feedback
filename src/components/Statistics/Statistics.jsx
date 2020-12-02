import React from 'react';
import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className="statisticsItem">Neutral: {neutral}</li>
      <li className="statisticsItem">Good: {good}</li>
      <li className="statisticsItem">Bad: {bad}</li>
      <li className="statisticsItem">Total: {total}</li>
      <li className="statisticsItem">Positive feedback: {positivePercentage}%</li>
    </ul>
  )
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}
export default Statistics;

