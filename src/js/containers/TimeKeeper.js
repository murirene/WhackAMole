/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { startGameTimer, stopGameTimer, stopGame, setGameTime, showScore, hideScore } from '../actions/actions';
import TimerKeeper from '../components/TimeKeeper';

const mapStateToProps = (state) => ({
  gameTimerId: state.appReducer.gameTimerId,
  game: state.appReducer.game,
  gameTimer: state.appReducer.gameTimer
});

const mapDispatchToProps = (dispatch) => ({
  startGameTimer: (timerId) => {
    dispatch(startGameTimer(timerId))
  },
  stopGameTimer: (timerId) => {
    dispatch(stopGameTimer(timerId))
  },
  stopGame: () => {
    dispatch(stopGame())
  },
  setGameTime: (timerId) => {
    dispatch(setGameTime(timerId))
  },
  showScore: () => {
    dispatch(showScore())
  },
  hideScore: () => {
    dispatch(hideScore())
  }
});

const TimerKeeperContainer = connect(mapStateToProps, mapDispatchToProps)(TimerKeeper);
export default TimerKeeperContainer;
