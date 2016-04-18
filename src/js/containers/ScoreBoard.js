/* React Container binds the Component to the store. */

import { connect } from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';

const mapStateToProps = (state) => ({
  hits: state.appReducer.hits
});

const mapDispatchToProps = () => ({
});

const ScoreBoardContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
export default ScoreBoardContainer;
