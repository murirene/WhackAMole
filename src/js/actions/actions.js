/* Action component of the Redux Unidirectional flow */
import { MOLE_HIT, MOLE_OUT, MOLE_HIDE, PLAY_GAME,
  STOP_GAME, START_TIMER, STOP_TIMER, MOLE_RECOVER,
  START_GAME_TIMER, STOP_GAME_TIMER, SET_GAME_TIME,
  SHOW_SCORE, HIDE_SCORE
} from './actionTypes.js'

import consts from '../lib/constants';

export function playGame() {
  return { type: PLAY_GAME, game: consts.gameState.PLAYING, gameTimer: consts.GAME_TIME, displayScore: false, hits: 0 }
}

export function stopGame() {
  return { type: STOP_GAME, game: consts.gameState.STOPPED, displayScore: true }
}

export function moleHide(moleId) {
  return { type: MOLE_HIDE, mole: consts.moleState.HIDDEN, index: moleId}
}

export function moleOut(moleId) {
  return { type: MOLE_OUT, mole: consts.moleState.PEEKING, index: moleId }
}

export function moleRecover(moleId) {
  return { type: MOLE_RECOVER, mole: consts.moleState.RECOVERING, index: moleId }
}

export function moleWhacked(moleId) {
  return { type: MOLE_HIT,  mole: consts.moleState.WHACKED, index: moleId }
}

export function timerStarts(timerId) {
  return { type: START_TIMER, timerId }
}

export function timerStops() {
  return { type: STOP_TIMER }
}

export function startGameTimer(gameTimerId) {
  return { type: START_GAME_TIMER, gameTimerId }
}

export function stopGameTimer() {
  return { type: STOP_GAME_TIMER }
}

export function setGameTime(time) {
  return { type: SET_GAME_TIME, gameTimer: time }
}

export function showScore(){
  return { type: SHOW_SCORE, displayScore: true}
}

export function hideScore(){
  return { type: HIDE_SCORE, displayScore: false}
}
