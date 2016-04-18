/* Jest Tests for validating the React Board. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/Board').default;
jest.dontMock('../../src/js/components/Mole').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Board", () => {
   it("should display game with moles", () => {
       let Board = require('../../src/js/components/Board').default;
       let moles = Array(consts.NUMBER_OF_MOLES).fill(consts.moleState.HIDDEN);

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
