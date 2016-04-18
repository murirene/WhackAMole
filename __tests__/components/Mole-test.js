jest.dontMock('../../src/js/components/Mole.jsx').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Mole", () => {
    it("should display the board with moles", () => {
        let Mole = require('../../src/js/components/Mole.jsx').default;
        var moleWhackedWasCalled = false;

        let score = (index)=> {
            moleWhackedWasCalled=true
        };

        let PeekingMoleComponent = TestUtils.renderIntoDocument(
            <Mole mole={"out"} moleWhacked={()=>{}} score={score} moleRecover={()=>{}} />
        );

        let HiddenMoleComponent = TestUtils.renderIntoDocument(
            <Mole mole={"hid"} moleWhacked={()=>{}} score={score} moleRecover={()=>{}} />
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
