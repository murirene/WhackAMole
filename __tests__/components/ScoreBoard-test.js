/* Jest Tests for validating the React Scoreboard. The View component of the Redux
 * unidirectional flow */
jest.dontMock('../../src/js/components/ScoreBoard').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The ScoreBoard", () => {
    it("should show no hits, 1 hit, and many hits.", () => {
        let ScoreBoard = require('../../src/js/components/ScoreBoard').default;

        let ScoreBoardScore10Component = TestUtils.renderIntoDocument(
            <ScoreBoard hits={10} />
        );

        let ScoreBoardScore1Component = TestUtils.renderIntoDocument(
            <ScoreBoard hits={1} />
        );

        let ScoreBoardScore0Component = TestUtils.renderIntoDocument(
            <ScoreBoard hits={0} />
        );

        let ScoreBoardElement = TestUtils.findRenderedDOMComponentWithTag(ScoreBoardScore10Component, 'h1');
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
