jest.dontMock('../../src/js/components/ScoreBoard.jsx').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The ScoreBoard", () => {
    it("", () => {
        let ScoreBoard = require('../../src/js/components/ScoreBoard.jsx').default;
        let hits=10;

        let ScoreBoardComponent = TestUtils.renderIntoDocument(
            <ScoreBoard hits={hits} />
        );

        let ScoreBoardScore1Component = TestUtils.renderIntoDocument(
            <ScoreBoard hits={1} />
        );

        let ScoreBoardScore0Component = TestUtils.renderIntoDocument(
            <ScoreBoard hits={0} />
        );

        let ScoreBoardElement = TestUtils.findRenderedDOMComponentWithTag(ScoreBoardComponent, 'h1');
        expect(ScoreBoardElement).toBeDefined();
        expect(ScoreBoardElement.textContent).toEqual('10 Moles Whacked!');

        ScoreBoardElement = TestUtils.findRenderedDOMComponentWithTag(ScoreBoardScore1Component, 'h1');
        expect(ScoreBoardElement).toBeDefined();
        expect(ScoreBoardElement.textContent).toEqual('1 Mole Whacked!');

        ScoreBoardElement = TestUtils.findRenderedDOMComponentWithTag(ScoreBoardScore0Component, 'h1');
        expect(ScoreBoardElement).toBeDefined();
        expect(ScoreBoardElement.textContent).toEqual('No Moles Whacked!');

    })
});
