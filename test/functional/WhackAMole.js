/* Functional Test. Nightwatch.js, runs on Selenium
 * Starts the game and hits each mole once. */

module.exports = {
    '@tags': ['test'],
    'Play Whack A Mole': function(browser) {
      browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('button', 1000)
      .click('button')
        .waitForElementNotPresent('div#HOLE_0', 9000)
        .waitForElementVisible('img#MOLE_0', 9000)
        .click('img#MOLE_0')
        .waitForElementNotPresent('div#HOLE_1', 9000)
        .waitForElementVisible('img#MOLE_1', 9000)
        .click('img#MOLE_1')
        .waitForElementNotPresent('div#HOLE_2', 9000)
        .waitForElementVisible('img#MOLE_2', 9000)
        .click('img#MOLE_2')
        .waitForElementNotPresent('div#HOLE_3', 9000)
        .waitForElementVisible('img#MOLE_3', 9000)
        .click('img#MOLE_3')
        .waitForElementNotPresent('div#HOLE_4', 9000)
        .waitForElementVisible('img#MOLE_4', 9000)
        .click('img#MOLE_4')
        .waitForElementNotPresent('div#HOLE_5', 9000)
        .waitForElementVisible('img#MOLE_5', 9000)
        .click('img#MOLE_5')
        .waitForElementNotPresent('div#HOLE_6', 9000)
        .waitForElementVisible('img#MOLE_6', 9000)
        .click('img#MOLE_6')
        .waitForElementNotPresent('div#HOLE_7', 9000)
        .waitForElementVisible('img#MOLE_7', 9000)
        .click('img#MOLE_7')
        .waitForElementNotPresent('div#HOLE_8', 9000)
        .waitForElementVisible('img#MOLE_8', 9000)
        .click('img#MOLE_8')
        .click('button')
        .waitForElementVisible('.score', 3000)
        .getText('.score', function(result){
          this.assert.equal(result.value,'9 Moles Whacked!')
        })
        .end();
    }

}
