import React from 'react';
import consts from '../lib/constants';

let Mole = React.createClass({
  render() {
    let Hole

    if(this.props.mole === consts.moleState.HIDDEN || this.props.mole === consts.moleState.RECOVERING){
      Hole = <div id={`HOLE_${this.props.index}`} className='hole'></div>
    }

    return (
      <div>
        <div className='mole'>
          <img id={`MOLE_${this.props.index}`} src={consts.imagMap[this.props.mole]}
               onClick={() =>{this.props.score(this.props.index, this.props.mole, this.props.moleWhacked, this.props.moleRecover)}} />
        </div>
        {Hole}
      </div>
    )
}
})

export default Mole
