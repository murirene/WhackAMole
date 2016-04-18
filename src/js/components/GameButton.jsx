/* GameButton React Component is used toggle the start/stop of the game */

import React from 'react';
import { Button } from 'react-bootstrap';
import consts from '../lib/constants';

let GameButton = React.createClass({
  render()
  {
    let handleClick = ()=> {this.props.game === consts.gameState.PLAYING? this.props.stopGame(): this.props.playGame();}
    let text = this.props.game === consts.gameState.PLAYING? 'Stop Game': 'Play Game';

    return (
      <div className='play-btn'>
        <Button key={Button.id} bsStyle='success' onClick={handleClick}>{text}</Button>
      </div>)
  }
})

export default GameButton
