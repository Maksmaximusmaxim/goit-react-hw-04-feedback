import React from 'react';
import css from 'components/feedback/feedback.module.css';
export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
render(){
    return <div className={css.section}>
        <h1>Оставьте отзыв</h1>
        <ul className={css.btnlist}>
            <li className={css.btnlistitem}><button type='submit' className={css.btn} >хорошо</button></li>
            <li className={css.btnlistitem}><button type='submit' className={css.btn} >средне</button></li>
            <li className={css.btnlistitem}><button type='submit' className={css.btn} >плохо</button></li>
        </ul>
        <h2>Cтатистика</h2>
        <ul>
            <li><p>Xорошо:</p></li>
            <li><p>Cредне:</p></li>
            <li><p>Плохо:</p></li>
            <li><p>Всего:</p></li>
            <li><p>Хороших отзывов:</p></li>
        </ul>
    </div>
    
}
}