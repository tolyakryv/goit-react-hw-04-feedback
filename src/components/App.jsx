import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const addFeedback = grad => {
    // eslint-disable-next-line default-case
    switch (grad) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  function countPositiveFeedbackPercentage() {
    const positiveFeedback = Math.round((good / countTotalFeedback) * 100);
    return positiveFeedback;
  }

  const grade = Object.keys({ good, neutral, bad });
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={grade} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
export default App;
