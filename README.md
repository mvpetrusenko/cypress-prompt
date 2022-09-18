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
9)  npx cypress run (for running test without opening the preview window in the browser)



In cypress.json file you can add some common for all tests info you want to be run before all tests: 

{

"baseUrl

}



