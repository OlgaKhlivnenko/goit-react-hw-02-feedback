import React from 'react';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      {options.map(option => (
      <button className='statistic-btn' type="button"
          key={option}
          onClick={onLeaveFeedback}>
          {option}
      </button>
      
      ))} 
    </div>
  )
}



export default FeedbackOptions;