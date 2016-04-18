/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { timerStarts, timerStops } from '../actions/actions';
import Timer from '../components/Timer';

const mapStateToProps = (state) => ({
  game: state.appReducer.game,
  timerId: state.appReducer.timerId
});

const mapDispatchToProps = (dispatch) => ({
  startTimer: (timerId) => {
    dispatch(timerStarts(timerId))
  },
  stopTimer: () => {
    dispatch(timerStops())
  }
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);
export default TimerContainer;
