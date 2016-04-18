/* Timer React Component dispatches a random mole movement every 100ms. */

import React from 'react';

let Timer = React.createClass({
  componentDidMount(){
    let timerId = setInterval(this.props.gameplay, 100);
    this.props.startTimer(timerId);
  },
  componentWillUnmount(){
    clearInterval(this.props.timerId);
    this.props.stopTimer();
  },
  render() {
    return false;
  }
})

export default Timer
