import React from 'react';
import css from 'components/feedbackOptions/FeedbackOptions.module.css';
export const FeedbackOptions = ({options,onLeaveFeedback})=>{
   return <ul className={css.btnlist}>
{options.map(op =>{return <li key={op} className={css.btnlistitem}><button type='button' className={css.btn} onClick={onLeaveFeedback}>{op}</button></li>} )}
</ul>
}