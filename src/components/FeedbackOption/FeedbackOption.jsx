
import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOption.module.css';

const FeedbackOption = ({ onLeaveFeedback }) => (
  <>
    <button name="good" className={style.button} type="button" onClick={onLeaveFeedback}>Good</button>
    <button name="neutral" className={style.button} type="button" onClick={onLeaveFeedback}>Neutral</button>
    <button name="bad" className={style.button} type="button" onClick={onLeaveFeedback}>Bad</button>
  </>
)

export default FeedbackOption;

FeedbackOption.propTypes = {
  onFeedback: PropTypes.func.isRequired
};