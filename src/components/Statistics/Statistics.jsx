import propTypes from 'prop-types';
import React from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p> good: {good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>total:{total}</p>
      <p>positiveFeedback: {positivePercentage}%</p>
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
