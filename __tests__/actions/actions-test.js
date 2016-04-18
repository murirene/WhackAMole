/* Jest Tests for validating the Actions component of the Redux
 * unidirectional flow */
'use strict';
jest.dontMock('../../src/js/actions/actions').default;
jest.dontMock('../../src/js/actions/actionTypes').default;
import consts from '../../src/js/lib/constants';

import { START_GAME_TIMER, STOP_GAME_TIMER,
    SHOW_SCORE, HIDE_SCORE, MOLE_HIT, MOLE_OUT,
    MOLE_HIDE, PLAY_GAME, STOP_GAME, START_TIMER,
    STOP_TIMER, MOLE_RECOVER, SET_GAME_TIME } from '../../src/js/actions/actionTypes'

describe('Actions', () => {
    it('should changes the game state.', () => {
        let actionCreator = require('../../src/js/actions/actions');
        expect(actionCreator.playGame().type).toEqual(PLAY_GAME);
        expect(actionCreator.playGame().game).toEqual(consts.gameState.PLAYING);
        expect(actionCreator.stopGame().type).toEqual(STOP_GAME);
        expect(actionCreator.stopGame().game).toEqual(consts.gameState.STOPPED);
        expect(actionCreator.moleHide(5).type).toEqual(MOLE_HIDE);
        expect(actionCreator.moleHide(5).mole).toEqual(consts.moleState.HIDDEN);
        expect(actionCreator.moleHide(5).index).toEqual(5);
        expect(actionCreator.moleOut(5).type).toEqual(MOLE_OUT);
        expect(actionCreator.moleOut(5).mole).toEqual(consts.moleState.PEEKING);
        expect(actionCreator.moleOut(5).index).toEqual(5);
        expect(actionCreator.moleRecover(5).type).toEqual(MOLE_RECOVER);
        expect(actionCreator.moleRecover(5).mole).toEqual(consts.moleState.RECOVERING);
        expect(actionCreator.moleRecover(5).index).toEqual(5);
        expect(actionCreator.moleWhacked(5).type).toEqual(MOLE_HIT);
        expect(actionCreator.moleWhacked(5).mole).toEqual(consts.moleState.WHACKED);
        expect(actionCreator.moleWhacked(5).index).toEqual(5);
        expect(actionCreator.timerStarts(10).type).toEqual(START_TIMER);
        expect(actionCreator.timerStarts(10).timerId).toEqual(10);
        expect(actionCreator.timerStops().type).toEqual(STOP_TIMER);
        expect(actionCreator.hideScore().type).toEqual(HIDE_SCORE);
        expect(actionCreator.showScore().type).toEqual(SHOW_SCORE);
        expect(actionCreator.startGameTimer(10).type).toEqual(START_GAME_TIMER);
        expect(actionCreator.stopGameTimer().type).toEqual(STOP_GAME_TIMER);
        expect(actionCreator.setGameTime().type).toEqual(SET_GAME_TIME);
    });
});
