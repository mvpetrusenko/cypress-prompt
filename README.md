# cypress-prompt

In IDE (PyCharm) in the terminal: 

1) npm install cypress (Enter) (Node.js package manager) 
2) npm -v (see actual version) 
3) node -v (see Node.js version) 
4)  if it isn`t the actual version - go on site nodejs.org and install actual version and then check it using node - v 
5)  npx cypress open (cypress window with our project/tests is opened) 
6)  click the test in cypress window you want to watch 
7)  in the preview window choose E2E test and browser (Chrome) you want to open your tests 
8)  the preview window of our tests will be opened 
9)  to open site you want to visit in your test: in the new terminal type: npm start (click the link (http://localhost:3000) in the terminal to open site for testing)
10)  npx cypress run (for running test without opening the preview window in the browser)


search in Cypress documentation: on.cypress.io/should (it opens info about should (assertions))

In cypress.json file you can add some common for all tests info you want to be run before all tests: 

{
  "baseUrl": "http://localhost:3000",
  "viewportHeight": 550,
  "viewportWidth": 660,
  "defaultCommandTimeout": 7000
}

function it with 2 parameters: test name, callback 

cy - global object 
visit - command/function
http:.... - parametr/argument of function

it('open website', () => { 

  cy.visit('http://localhost:3000') OR cy.visit('/23232323') if we write the main url 'http://localhost:3000' as baseURL in the cypress.json

})

it.only (for running one specific test and ignoring the other tests in the file) 

take elements from DOM (XPath, by id, class... in F12 Chrome DevTools)

cy.get('id from DOM') 

describe.only('Group 1' ... to run only tests within this group
