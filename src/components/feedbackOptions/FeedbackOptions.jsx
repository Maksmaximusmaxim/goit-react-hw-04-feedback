import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/feedbackOptions/FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnlist}>
      {options.map(op => {
        return (
          <li key={op} className={css.btnlistitem}>
            <button type="button" className={css.btn} onClick={onLeaveFeedback}>
              {op}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
