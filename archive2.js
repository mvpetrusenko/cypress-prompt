/*

1) add custom commands // in choosing different categories of the blog!!!!!

// adding a function to the custom command:
Cypress.Commands.add("nameOfFunction", productName => { // creating a custom command

    cy.get.....
      if     (productName)      // putting a repeating function to the custom command
        .click

}


cy.nameOfFunction(newParameterProduct); // calling the function with a specific parameter
cy.nameOfFunction(newParameterProduct2); // choose the other product


2) to the sign in file (entering first name, email, password to the form)

in signIn.js file:

describe("Filling in the form from the file", () => {

    before(function() {

        cy.fixture('exampleFile').then(function(data) { // the way to use json file

           globalThis.data = data; // or this.data = data; depending on your machine

        })
    })

in exampleFile.json:

{

   "name": "David",
   "email": "m@...",
   "password": "123.."

}


Creating a custom command for filling in data for signing in from the file:
Create support folder -> commands.js file

In the commands.js file:


Cypress.Commands.add("filling in the form from the file", (name, email, password, $selector, textMessage) => {

    cy.get('[name = "first_name"]').type(data.name); // name from the above parameters of the function
    cy.get('[name = "email"]').type(data.email);
    cy.get('[name = "password"]').type(data.password);
    cy.get('[type = "submit"]').click(); // click the Submit button
    cy.get($selector).contains(textMessage) // making an assertion of the test

}


Writing a test and putting in created before custom commands with specific parameters:

In the signIn.js file:

it("Test 5", () => {

   cy.visit("http:/...")
   cy.get('#sign-in')..
   cy.title().should('include', 'Sign in...');
   cy.url().should('include', '...');

   cy.filling in the form from the file(data.name, data.email, data.password, 'h2', 'You are signed in!');

   }); // if data.email is need to be missing in the other test just add " " in the parameters instead


3) to choose multiple - create list in json file and wrap up (each  if ... and put to the custom command

4) Page Object Modeling (place cy.visit in one location) 

*/