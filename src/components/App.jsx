import React, { Component } from 'react';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = grade => {
    console.log(grade);
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
        <div>
          <h2>Please leave feedback</h2>
          <div>
            <button
              type="button"
              key={grade[0]}
              onClick={() => this.addFeedback(grade[0])}
            >
              good
            </button>
            <button
              type="button"
              key={grade[1]}
              onClick={() => this.addFeedback(grade[1])}
            >
              neutral
            </button>
            <button
              type="button"
              key={grade[2]}
              onClick={() => this.addFeedback(grade[2])}
            >
              bad
            </button>
          </div>
        </div>
        {this.countTotalFeedback() > 0 ? (
          <div>
            <h2>Statistics</h2>
            <div>
              <p>good:{this.state.good}</p>
              <p>neutral:{this.state.neutral}</p>
              <p>bad:{this.state.bad}</p>
              <p>total:{this.countTotalFeedback()}</p>
              <p>
                {' '}
                positiveFeedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </div>
          </div>
        ) : (
          <p>There is no feedback </p>
        )}
      </>
    );
  }
}
