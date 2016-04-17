import React from 'react';
import Mole from '../components/Mole';

let Board = React.createClass({
  render()
  {
    return (<div className="board" >
      {
        this.props.moles.map((mole, index) => {
            return <Mole key={`MOLE_${index}`} mole={mole} index={index}
                         score={this.props.score} moleWhacked={this.props.moleWhacked}
                         moleRecover={this.props.moleRecover} />
          }
        )}
    </div>)
  }
})

export default Board
