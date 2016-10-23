import React from 'react'
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          console.log(this.state.countdownStatus);
          this.startTimer();
          break;
        case 'stopped':
          console.log(this.state.countdownStatus);
          this.setState({count: 0});
        case 'paused':
          console.log(this.state.countdownStatus);
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  };
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;

      this.setState({
        count: newCount
      });
    }, 1000);
  };
  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  };
  render() {
    var {count} = this.state;
    return (
      <div>
        <h1 className='page-title'>Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange} mode='timer' />
      </div>
    )
  }
}

export default Timer
