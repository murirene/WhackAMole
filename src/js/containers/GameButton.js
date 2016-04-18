/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { playGame, stopGame } from '../actions/actions';
import GameButton from '../components/GameButton';

const mapStateToProps = (state) => ({
  game: state.appReducer.game
});

const mapDispatchToProps = (dispatch) => ({
  playGame: () => {
    dispatch(playGame());
  },
  stopGame: () => {
    dispatch(stopGame());
  }
});

const GameButtonContainer = connect(mapStateToProps, mapDispatchToProps)(GameButton);
export default GameButtonContainer;
