/* Jest Tests for validating the reducer component of the Redux
 * unidirectional flow */
jest.dontMock('../../src/js/reducers/app.js').default;
jest.dontMock('../../src/js/actions/actions').default;
jest.dontMock('../../src/js/actions/actionTypes.js').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');
import consts from '../../src/js/lib/constants';

describe("The Reducer", () => {
    it("should maintain the state of the application.", () => {
        let actionCreator = require('../../src/js/actions/actions');
        let reducer = require('../../src/js/reducers/app.js').default;
        let state;

        state = reducer(state, actionCreator.playGame());
        expect(state.game).toEqual(consts.gameState.PLAYING);

        state = reducer(state, actionCreator.stopGame());
        expect(state.game).toEqual(consts.gameState.STOPPED);

        state = reducer(state, actionCreator.moleHide(5));
        expect(state.moles[5]).toEqual(consts.moleState.HIDDEN);

        state = reducer(state, actionCreator.moleOut(5));
        expect(state.moles[5]).toEqual(consts.moleState.PEEKING);

        state = reducer(state, actionCreator.moleRecover(5));
        expect(state.moles[5]).toEqual(consts.moleState.RECOVERING);

        state = reducer(state, actionCreator.moleWhacked(5));
        expect(state.moles[5]).toEqual(consts.moleState.WHACKED);

        state = reducer(state, actionCreator.timerStarts(101));
        expect(state.timerId).toEqual(101);

        state = reducer(state, actionCreator.timerStops());
        expect(state.timerId).toEqual(undefined);

        state = reducer(state, actionCreator.showScore());
        expect(state.displayScore).toEqual(true);

        state = reducer(state, actionCreator.hideScore());
        expect(state.displayScore).toEqual(false);

        state = reducer(state, actionCreator.startGameTimer(11));
        expect(state.gameTimerId).toEqual(11);

        state = reducer(state, actionCreator.stopGameTimer());
        expect(state.gameTimerId).toEqual(undefined);

        state = reducer(state, actionCreator.setGameTime(100));
        expect(state.gameTimer).toEqual(99);
    })
});
