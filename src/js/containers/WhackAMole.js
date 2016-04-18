/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import { moleHide, moleOut, moleRecover, moleWhacked } from '../actions/actions';
import WhackAMole from '../views/WhackAMole';

const mapStateToProps = (state) => ({
  game: state.appReducer.game,
  displayScore: state.appReducer.displayScore,
  hits: state.appReducer.hits
});

const mapDispatchToProps = (dispatch) => ({
  moleWhacked: (index) => {
    dispatch(moleWhacked(index));
  },
  moleRecover: (index) => {
    dispatch(moleRecover(index));
  },
  moleOut: (index) => {
    dispatch(moleOut(index));
  },
  moleHide: (index) => {
    dispatch(moleHide(index));
  }
  });

const WhackAMoleContainer = connect(mapStateToProps, mapDispatchToProps)(WhackAMole);
export default WhackAMoleContainer;
