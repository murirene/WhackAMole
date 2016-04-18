/* Jest Tests for validating the React Mole. The View component of the Redux
 * unidirectional flow */
jest.dontMock('../../src/js/components/Mole').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Mole", () => {
    it("should peek, hide and get whacked.", () => {
        let Mole = require('../../src/js/components/Mole').default;
        var moleWhackedWasCalled = false;

        let score = ()=> {
            moleWhackedWasCalled=true
        };

        let PeekingMoleComponent = TestUtils.renderIntoDocument(
            <Mole mole={consts.moleState.PEEKING} moleWhacked={()=>{}} score={score} moleRecover={()=>{}} />
        );

        let HiddenMoleComponent = TestUtils.renderIntoDocument(
            <Mole mole={consts.moleState.HIDDEN} moleWhacked={()=>{}} score={score} moleRecover={()=>{}} />
        );

        let PeekingMoledElements = TestUtils.scryRenderedDOMComponentsWithClass(PeekingMoleComponent, 'hole');
        let HiddenMoledElements = TestUtils.findRenderedDOMComponentWithClass(HiddenMoleComponent, 'hole');

        expect(HiddenMoledElements).toBeDefined();
        expect(PeekingMoledElements).toBeDefined();
        expect(TestUtils.isDOMComponent(HiddenMoledElements)).toBe(true);
        expect(TestUtils.isDOMComponent(PeekingMoledElements)).toBe(false);
        TestUtils.Simulate.click(
            TestUtils.findRenderedDOMComponentWithTag(PeekingMoleComponent, 'img')
        );

        expect(moleWhackedWasCalled).toEqual(true);
    })
});
