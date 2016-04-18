/* High level React View Component is smarter and aggregates lower level React components. */
require('normalize.css/normalize.css');
require('../styles/App.css');
import React from 'react';
import BoardContainer from '../containers/Board';
import GameButtonContainer from '../containers/GameButton';
import TimerContainer from '../containers/Timer';
import TimerKeeperContainer from '../containers/TimeKeeper';
import ScoreBoardContainer from '../containers/ScoreBoard';
import { PageHeader } from 'react-bootstrap';
import consts from '../lib/constants';

let WhackAMole = React.createClass({
  gameplay(){
      if (this.props.mole !== consts.moleState.WHACKED) {
        let mole = Math.floor(Math.random() * consts.NUMBER_OF_MOLES)
        Math.floor(Math.random() * 2) ? this.props.moleOut(mole) : this.props.moleHide(mole)
      }
  },
  score: (index, mole, moleWhacked, moleRecover) => {
    if(mole === consts.moleState.PEEKING) {
      moleWhacked(index);
      setTimeout(() =>{moleRecover(index)}, 1000);
    }
  },
  render() {
    let timer;
    let gameTimer;
    let score;

    if(this.props.game === consts.gameState.PLAYING) {
      timer = <TimerContainer gameplay={this.gameplay}/>
      gameTimer = <TimerKeeperContainer />
    }

    if(this.props.displayScore){
      score = <ScoreBoardContainer />
    }

    return (
        <div className='index'>
          <div className="wam-header">
            <PageHeader >Whack-A-Mole</PageHeader>
          </div>
        {score}
        <div className='main-container'>
            <div className="controlPanel">
              <GameButtonContainer />
              {gameTimer}
            </div>
          <BoardContainer score={this.score} />
          {timer}
        </div>
      </div>
    )}
})

export default WhackAMole;
