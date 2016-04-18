/* Jest Tests for validating the React GameButton. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/GameButton').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The GameButton", () => {
    it("", () => {
        let GameButton = require('../../src/js/components/GameButton').default;

        let playGameWasCalled = false;
        let stopGameWasCalled = false;

        let playGame = (index)=> {playGameWasCalled=true};
        let stopGame = (index)=> {stopGameWasCalled=true};

        let PlayComponent = TestUtils.renderIntoDocument(
            <GameButton game={consts.gameState.STOPPED} playGame={playGame} stopGame={stopGame}/>
        );

        let StopComponent = TestUtils.renderIntoDocument(
            <GameButton game={consts.gameState.PLAYING} playGame={playGame} stopGame={stopGame}/>
        );

        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithTag(PlayComponent, 'Button')
        );

        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithTag(StopComponent, 'Button')
        );

        let StopGameplayElement = TestUtils.findRenderedDOMComponentWithTag(PlayComponent, 'Button');
        let PlayGameplayElement = TestUtils.findRenderedDOMComponentWithTag(StopComponent, 'Button');


        expect(StopGameplayElement).toBeDefined();
        expect(PlayGameplayElement).toBeDefined();
        expect(StopGameplayElement.textContent).toEqual('Play Game');
        expect(PlayGameplayElement.textContent).toEqual('Stop Game');
        expect(playGameWasCalled).toEqual(true);
        expect(stopGameWasCalled).toEqual(true);
    })
});
