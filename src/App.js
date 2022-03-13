import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions'
// import Statistics from './components/Statistics'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonName = ['Good', 'Neutral', 'Bad'];
  leaveFeedback = evt => {
    const option = evt.currentTarget;
    this.setState(prevState => {
          return {
              [option]: prevState[option] + 1,
          };
    });
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
      {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
        <FeedbackOptions options={this.buttonName}
          onLeaveFeedback={this.leaveFeedback} />
     {/*  */}
    </div>
  );
  }
  
}

export default App;
