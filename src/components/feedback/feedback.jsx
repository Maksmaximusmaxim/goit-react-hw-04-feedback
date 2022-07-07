import React from 'react';
import css from 'components/feedback/feedback.module.css';
import { Section } from 'components/Section/Section';
import {Statistics} from 'components/statistics/Statistics';
import {FeedbackOptions} from 'components/feedbackOptions/FeedbackOptions';
const options = ['good', 'bad', 'neutral'];
export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };



      onClick = event => {
        const curText = event.currentTarget.textContent.toLowerCase();
        this.setState(prevState => {
          return {
            [curText]: prevState[curText] + 1,
          };
        });
      };
 
 countTotalFeedback=()=>{
   return this.state.bad + this.state.neutral + this.state.good;   
};
countPositiveFeedbackPercentage = ()=>{
    return String((100 / (this.state.bad + this.state.neutral + this.state.good)) * this.state.good + 0).split('.')[0]
}


render(){

    return <div className={css.section}>
      <Section title="Оставьте отзыв">
        <FeedbackOptions options={options} onLeaveFeedback={this.onClick} />
      </Section>
        
       
      <Section title="Cтатистика"> 
        <Statistics good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Section>
       
    </div>
    
}

}