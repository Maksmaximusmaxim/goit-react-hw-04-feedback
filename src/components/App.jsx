import {useState} from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';



export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


 const onClick = event => {
    const curText = event.currentTarget.textContent.toLowerCase();
    switch (curText) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
        case 'neutral':
          setNeutral(prevState => prevState + 1)
          break;
          case 'bad':
            setBad(prevState => prevState + 1)
            break;
      default:
        return;
    }
  };

const  countTotalFeedback = () => {
    return bad + neutral + good;
  };
 const countPositiveFeedbackPercentage = () =>{
    return String(
      (100 / (bad + neutral + good)) *
        good +
        0
    ).split('.')[0];
  };

  const options = ["good","neutral","bad"]
  console.log(options)
    return (
      <>
        <Section title="Оставьте отзыв">
          <FeedbackOptions options={options} onLeaveFeedback={onClick} />
        </Section>

        <Section title="Cтатистика">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  
}
