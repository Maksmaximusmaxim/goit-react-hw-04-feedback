import React from 'react';
import css from 'components/feedback/feedback.module.css';
export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

goodFeedback =()=>{
    this.setState(
        (prevState)=>{ 
            return {good: prevState.good + 1}
    }
    ) 
};
neutralFeedback = ()=> {
    this.setState(
        (prevState)=> {return {neutral: prevState.neutral + 1}}
    )
};
badFeedback = ()=> {
this.setState(
    (prevState)=>{
        return {bad : prevState.bad + 1}
    }
)
}
 countTotalFeedback=()=>{
   return this.state.bad + this.state.neutral + this.state.good
};
countPositiveFeedbackPercentage = ()=>{
    return String((100 / (this.state.bad + this.state.neutral + this.state.good)) * this.state.good).split('.')[0]
}

render(){

    return <div className={css.section}>
        <h1>Оставьте отзыв</h1>
        <ul className={css.btnlist}>
            <li className={css.btnlistitem}><button type='button' className={css.btn} onClick={this.goodFeedback}>хорошо</button></li>
            <li className={css.btnlistitem}><button type='button' className={css.btn} onClick={this.neutralFeedback}>средне</button></li>
            <li className={css.btnlistitem}><button type='button' className={css.btn} onClick={this.badFeedback}>плохо</button></li>
        </ul>
        <h2>Cтатистика</h2>
        <ul>
            <li><p>Xорошо:{this.state.good}</p></li>
            <li><p>Cредне:{this.state.neutral}</p></li>
            <li><p>Плохо:{this.state.bad}</p></li>
            <li><p>Всего:{this.countTotalFeedback()}</p></li>
            <li><p>Хороших отзывов:{this.countPositiveFeedbackPercentage()}%</p></li>
        </ul>
    </div>
    
}

}