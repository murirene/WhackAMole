/* Reducer component of the Redux Unidirectional flow
* The Reducer is a pure function that will produce a new state as per the incoming Action. */

import { MOLE_HIT, MOLE_OUT, MOLE_HIDE, PLAY_GAME,
  STOP_GAME, START_TIMER, STOP_TIMER, MOLE_RECOVER,
  START_GAME_TIMER, STOP_GAME_TIMER, SET_GAME_TIME,
  SHOW_SCORE, HIDE_SCORE
} from '../actions/actionTypes.js';
import consts from '../lib/constants';

const initialState = {
  game: consts.gameState.STOPPED,
  moles: Array(consts.NUMBER_OF_MOLES).fill(consts.moleState.HIDDEN),
  hits: 0,
  timerId: 0,
  gameTimer: 0,
  gameTimerId: 0,
  displayScore: false
}

export default function(state=initialState, action) {
    switch(action.type){
      case MOLE_HIDE:
      case MOLE_OUT:
          return state.moles[action.index] === consts.moleState.WHACKED ? state: Object.assign({}, state,  { moles: [...state.moles.slice(0, action.index), action.mole, ...state.moles.slice(action.index + 1)] })
      case MOLE_RECOVER:
            return Object.assign({}, state,  { moles: [...state.moles.slice(0, action.index), action.mole, ...state.moles.slice(action.index + 1)] });
      case MOLE_HIT:
          return Object.assign({}, state,  { moles: [...state.moles.slice(0, action.index), action.mole, ...state.moles.slice(action.index + 1)], hits: state.hits + 1 })
      case PLAY_GAME:
        return Object.assign({}, state,  { game: action.game, gameTimer: action.gameTimer, displayScore: action.displayScore, hits: action.hits})
      case STOP_GAME:
        return Object.assign({}, state,  { game: action.game, moles: Array(consts.NUMBER_OF_MOLES).fill(consts.moleState.HIDDEN), displayScore: action.displayScore })
      case START_TIMER:
        return Object.assign({}, state,  { timerId: action.timerId})
      case STOP_TIMER:
        return Object.assign({}, state,  { timerId: undefined })
      case START_GAME_TIMER:
        return Object.assign({}, state,  { gameTimerId: action.gameTimerId})
      case STOP_GAME_TIMER:
        return Object.assign({}, state,  { gameTimerId: undefined })
      case SET_GAME_TIME:
        return Object.assign({}, state,  { gameTimer: state.gameTimer - 1 })
      case SHOW_SCORE:
        return Object.assign({}, state,  { displayScore: action.displayScore })
      case HIDE_SCORE:
        return Object.assign({}, state,  { displayScore: action.displayScore })
      default:
          return state;
    }
}
