import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  };
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  };
  render() {

    var {countdownStatus, mode} = this.props;
    var renderStartStopButton = () => {
      if (mode === 'countdown') {
        if (countdownStatus === 'started') {
          return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
        } else if (countdownStatus === 'paused') {
          return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
        }
      } else if (mode === 'timer') {
        if (countdownStatus === 'started') {
          return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
        } else {
          return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
        }
      }
    }

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )

  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
