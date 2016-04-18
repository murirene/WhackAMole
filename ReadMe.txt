*Environment:
Node: v5.9.1
npm: 3.7.3

*URL:
http://localhost:3000

*Git:
https://github.com/murirene/WhackAMole.git

*Dependency Installation
Inside of the directory run the following command to install the dependencies:
npm install

*Build
npm run build

*Unit Tests
npm test

*Start Application (open the browser to http://localhost:3000)
npm start

*Functional Test (It will expect the Mozilla browser, unless Chrome is configured in nightwatch.json)
1. Download the Selenium Standalone Server (selenium-server-standalone-2.53.0.jar) and place it in test/bin
http://www.seleniumhq.org/download/
2. run "npm start" on one command window
3. run "npm run automation" on another window.
4. The test should play the game and hit each mole.

********************
*Tools/Technologies*
********************

Node.js
https://nodejs.org/en/

Express.js
http://expressjs.com/

React.js
https://facebook.github.io/react/

Javascript - ES6
http://es6-features.org

Redux
https://github.com/reactjs/redux

Bootstrap
http://getbootstrap.com/

CSS3 - FlexBox
http://www.w3schools.com/css/css3_flexbox.asp

Jest.js
https://facebook.github.io/jest/

Nightwatch.js
http://nightwatchjs.org/

Gulp.js
http://gulpjs.com/

Webpack
https://webpack.github.io/

Babel
https://babeljs.io/docs/learn-es2015/

NPM
https://www.npmjs.com/

WebStorm
https://www.jetbrains.com/webstorm/

********************

Design:
I used Redux/React to implement the Whack-A-Mole Game.
The Redux/React is a unidirectional flow that makes developing a web application easy and predictable.
[Actions] -> [Reducer] -> [Store] -> [View (React)] -> [Actions]

A single store manages the application state. React abstracts away the DOM and handles the rendering.
React is efficient as it maintains a virtual DOM and only updates the real DOM when it needs to be re-rendered.
The separation of concerns is promoted by this approach. The props for the components are dependency injected via the
containers that bind to the store. The higher level components which I call views aggregates components into a page.
The Redux Store works with the publisher/subscriber model, so components are notified of changes to the state.
I used the CSS3 Flexbox feature for laying out of the page. This is more consistent than the float or table approach. Also, Bootstrap
was used for the look and feel.
I used the new ES6 standard for the javascript version. The new standard has made programming javascript very concise
and solved some of the unpredictability issues.
NPM, Gulp.js and Webpack are used for bundling the dependencies, front end, and the server.
Babel is the transpiler used to process JSX and ES6 features.
I used Nightwatch.js and Jest.js for creating unit and functional tests. Jest.js is a natural fit for React component testing.
Jest.js also provides the code coverage.
Nightwatch.js is very easy to use for rapid Functional test development.
I used Chrome Development Tools and WebStorm IDE.
The application was developed on my Mac Pro.

Below are the components
Actions: Objects with at least a type attribute that applies changes to the state via the reducer.
	/src/js/actions
		playGame - Starts the Game.
		stopGame - Stops the Game.
		moleHide(moleId) - Hides the Mole with this Id.
		moleOut(moleId) - Pops the Mole with this Id.
		moleWhacked(moleId) - Whacks the Popped Mole with this Id.
		moleRecover - Recovers the Whacked Mole for 1 second.
		timerStarts - Starts the Timer that randomly updates the position of the moles every 100ms.
		timerStops - Stops the Timer when the game stops.
		startGameTimer - Starts the Game Timer.
		stopGameTimer - Stops the Game Timer.
		setGameTime - Updates the Game Timer every second.
		showScore - Shows the Score every few seconds.
		hideScore - Hides the Score.

Components: React low level components
	/src/js/components
		Board - Container for the 9 Moles
		Mole - Mole element
		GameButton - Start/Stop Button
		ScoreBoard - Score element
		TimeKeeper - Game Timer
		Timer - Non-Rendering element that randmoly updates mole positions when Mounted.

Views: Higher level React Components
	/src/js/views
		WhackAMole
			High level component that aggregates the components above.

Containers: Binds the Components to the Store
	/src/js/containers
		These artifacts integrate the Store with the Components.

Reducers: Pure function that manages the application state.
	/src/js/reducers
		The reducer is a pure function that takes the actions and produces a new state.

Stores
	/src/js/stores
		Redux provided single store that creates the State via the reducer.

State: Application State
    game: game status (play/stop)
    moles: Array of Moles and State (hid, out, hit)
    hits: #'s of Moles hit
    timerId: Timer id
    gameTimer: Game Time
    gameTimerId: Game Timer id
    displayScore: Display Score flag(true/false)

Tests
    __test__ - Jade unit tests.
	test/functional -- End to End test that verifies all of the functionality
	/bin/selenium-server-standalone-2.53.0.jar - Selenium Driver used for the NightWatch Test. (Mac version)

