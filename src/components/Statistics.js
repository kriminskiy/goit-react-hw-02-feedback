import React from 'react';
import { PropTypes } from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total:{total} </li>
    <li>Positive Feedback: {positiveFeedback}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
