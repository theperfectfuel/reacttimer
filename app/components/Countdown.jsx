import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.renderControlArea = this.renderControlArea.bind(this);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  };
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;

      if (newCount == 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }

      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);

  };
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  };
  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  };
  renderControlArea() {
    if (this.state.countdownStatus != 'stopped') {
      return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange} mode='countdown' />
    } else {
      return <CountdownForm onSetCountdown={this.handleSetCountdown} />
    }
  };
  render() {
    var {count, countdownStatus} = this.state;
    return (
      <div>
        <h1 className='page-title'>Countdown Timer</h1>
        <Clock totalSeconds={count} />
        {this.renderControlArea()}
      </div>
    )
  }
}

export default Countdown
