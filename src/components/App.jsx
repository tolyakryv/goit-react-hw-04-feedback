import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = grade => {
    this.setState(prevState => ({
      [grade]: prevState[grade] + 1,
    }));
  };
  countTotalFeedback() {
    const totalGrade = Object.values(this.state);
    return totalGrade.reduce((total, totalGrade) => total + totalGrade, 0);
  }
  countPositiveFeedbackPercentage() {
    const positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  }

  render() {
    const grade = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={grade} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
