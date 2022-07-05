import React, { Component } from 'react';
import s from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
    console.log(e);
  };
  /*handleGood = () => {this.setState(prevState => ({good: prevState.good + 1,}));};
      handleNeutral = () => {this.setState(prevState => ({neutral: prevState.neutral + 1,}));};
      handleBad = () => { this.setState(prevState => ({bad: prevState.bad + 1,}));};*/
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () =>
    this.countTotalFeedback() === 0
      ? '0'
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.conteiner}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
