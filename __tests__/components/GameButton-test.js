jest.dontMock('../../src/js/components/GameButton.jsx').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The GameButton", () => {
    it("", () => {
        let GameButton = require('../../src/js/components/GameButton.jsx').default;

        let playGameWasCalled = false;
        let stopGameWasCalled = false;

        let playGame = (index)=> {playGameWasCalled=true};
        let stopGame = (index)=> {stopGameWasCalled=true};

        let PlayComponent = TestUtils.renderIntoDocument(
            <GameButton game={"stop"} playGame={playGame} stopGame={stopGame}/>
        );

        let StopComponent = TestUtils.renderIntoDocument(
            <GameButton game={"play"} playGame={playGame} stopGame={stopGame}/>
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
