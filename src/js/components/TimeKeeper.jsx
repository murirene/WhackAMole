import React from 'react';
import { Input } from 'react-bootstrap';

let TimerKeeper = React.createClass({

  componentDidMount(){
    let gameTimerId = setInterval(this.props.setGameTime, 1000);
    this.props.startGameTimer(gameTimerId);
  },
  componentWillUnmount(){
    clearInterval(this.props.gameTimerId);
    this.props.stopGameTimer();
  },
  componentWillUpdate() {
    if(this.props.gameTimer <= 0){
      this.props.stopGame();
    }

    if(this.props.gameTimer % 3 === 0){
      this.props.showScore();
    } else {
      this.props.hideScore();
    }
  },
  render() {
    let minutes = Math.floor(this.props.gameTimer / 60);
    let seconds = this.props.gameTimer - minutes * 60;
    if(seconds < 10){
      seconds = `0${seconds}`
    }
    return <div className="gameTimer">
      <form className="form-horizontal">
        <Input type="text" label="Time" value={`${minutes}:${seconds}`} labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
      </form>
      </div>
  }
})

export default TimerKeeper
