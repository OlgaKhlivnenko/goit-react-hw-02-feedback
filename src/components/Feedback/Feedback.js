import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivefeedback: 0,
  };
  
  goodFeedback = () => {
      this.setState(prevState => {
          return {
              good: prevState.good + 1,
          };
    });
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    };
  // countTotalFeedback()
  // countPositiveFeedbackPercentage()
    render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.goodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.neutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default Feedback;