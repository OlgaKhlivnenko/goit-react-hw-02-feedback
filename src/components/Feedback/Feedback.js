import React from 'react';
import './Feedback.css';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
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
  
  countTotalFeedback = () => {
    this.setState(prevState => {
        
        return {
          total: this.state.bad + this.state.neutral + this.state.good,
      };
      
    });
    console.log(this.total)
    };
  
  // countPositiveFeedbackPercentage()
    render() {
    return (
      <div className='conteiner'>
        <h1>Please leave feedback</h1>
        <div>
          <button className='statistic-btn' type="button" onClick={evt => {
            { this.goodFeedback }
          }}>
            
            Good
          </button>
          <button className='statistic-btn' type="button" onClick={this.neutralFeedback}>
            Neutral
          </button>
          <button className='statistic-btn' type="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className='statistic-box'>
          <span className='statistic--item'>Good: {this.state.good}</span>
          <span className='statistic--item'>Neutral: {this.state.neutral}</span>
          <span className='statistic--item'>Bad: {this.state.bad}</span>
          <span className='statistic--item'>Total: {this.state.total}</span>
          <span className='statistic--item'>Positive feedback: {this.state.positiveFeedback}</span>
        </div>
      </div>
    );
  }
};
Feedback.propTypes = {
  
}


export default Feedback;