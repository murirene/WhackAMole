jest.dontMock('../../src/js/components/Board.jsx').default;

var TestUtils = require('react-addons-test-utils');
//import Board from '../../src/js/components/Board';
var React = require('react');

describe("The Board", () => {
   it("should display the board with moles", () => {
       var Board = require('../../src/js/components/Board.jsx').default;
       var moles=['hid', 'hid', 'hid'];

       var BoardComponent = TestUtils.renderIntoDocument(
           <Board moles={moles}/>
       );
       var boardElements = TestUtils.findRenderedDOMComponentWithTag(BoardComponent, 'div');

       console.log(BoardComponent.props);
       console.log(BoardComponent.textContent);
       console.log(boardElements.className);
       console.log(boardElements.textContent);
       expect(boardElements.className).toEqual('board');

   })
});
