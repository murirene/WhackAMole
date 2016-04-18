/* ScoreBoard React Component Shows the players score. */

import React from 'react';

let ScoreBoard = React.createClass({
  render()
  {
    let moles = this.props.hits === 1 ? 'Mole': 'Moles';
    let nbr = this.props.hits === 0? 'No': this.props.hits;
   return (
      <h1 className="score">{nbr} {moles} Whacked!</h1>
   )
  }
})

export default ScoreBoard
