/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import Board from '../components/Board';
import { moleHide, moleOut, moleRecover, moleWhacked } from '../actions/actions';

const mapStateToProps = (state) => ({
  moles: state.appReducer.moles
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

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);
export default BoardContainer;
