Environment:
Node: v5.9.1
npm: 3.7.3

URL:
http://localhost:3000/

Inside of the directory run the following command to install the dependencies:
npm install

Also, install Nightwatch.js for the funcitonal test:
sudo npm install nightwatch -g

To Start the application issue the following command:
npm start

Please download Selenium Standalone Server (selenium-server-standalone-2.53.0.jar) and place it in /test/bin to run the Functional Tests.
http://www.seleniumhq.org/download/

After starting the application, then in a separate window run the commmand, to start the Functional Test:
nightwatch

Design:
I used Redux/React to implement the Whack-A-Mole Game. CSS3 Flexbox feature for the layout of the page. ES6 as the javascript version. Webpack for bundling the front end and Node as the server. I used Chrome and Firefox for testing. WebStorm was the IDE and a Mac Pro for development. I chose React as the View and Redux as the Application State. React abstracts away the DOM and event handling of the front end. It also has a great separation of concerns as the components only care about the individual rendering. The higher level components which I call views aggregates them and passes the state via the props. Redux works as a publisher/subscriber to the state and the components. As the state changes via actions, the components that subscribe to these properties of the state are updated. React is efficient as it maintains a virtual DOM and only updates the real DOM when changes have been made. The Redux/React is a unidirectional flow that makes it predictable and easy to troubleshoot. Below are the components
Actions: Objects with at least a type attribute that applies changes to the state via the reducer.
	/src/actions
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

Components
	/src/components
		Board - Container for the 9 Moles
		Mole - Mole element
		GameButton - Start/Stop Button
		ScoreBoard - Score element
		TimeKeeper - Game Timer
		Timer - Non-Rendering element that randmoly updates mole positions when Mounted.

Views
	/src/views
		WhackAMole
			High level component that aggregates the components above.

Containers
	/src/containers
		These artifacts integrate the Store with the Components.

Reducers
	/src/reducers
		The reducer is a pure function that takes the actions and produces a new state.

Stores
	/src/stores
		Redux provided a single store that creates the State via the reducer.

State
    game: game status (play/stop)
    moles: Array of Moles and State (hid, out, hit)
    hits: #'s of Moles hit
    timerId: Timer id
    gameTimer: Game Time
    gameTimerId: Game Timer id
    displayScore: Display Score flag(true/false)

Tests
	/src/test/functional -- End to End test that verifies all of the functionality
	/bin/selenium-server-standalone-2.53.0.jar - Selenium Driver used for the NightWatch Test. (Mac version)

