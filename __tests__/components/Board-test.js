jest.dontMock('../../src/js/components/Board.jsx').default;
jest.dontMock('../../src/js/components/Mole.jsx').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Board", () => {
   it("should display the board with moles", () => {
       let Board = require('../../src/js/components/Board.jsx').default;
       let moles=['hid', 'hid', 'hid'];

       let BoardComponent = TestUtils.renderIntoDocument(
           <Board moles={moles}/>
       );
       let boardElement = TestUtils.findRenderedDOMComponentWithClass(BoardComponent, 'board');
       let moledElements = TestUtils.scryRenderedDOMComponentsWithClass(BoardComponent, 'mole');

       expect(boardElement).toBeDefined();
       expect(TestUtils.isDOMComponent(boardElement)).toBe(true);
       expect(moledElements.length).toEqual(moles.length);
   })
});
