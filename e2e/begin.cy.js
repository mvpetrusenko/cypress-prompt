/*
     To open our testing site before running tests add before hook ore beforeEach hook
     to be executed before each of tests

     To execute beforeEach hook only in the second describe group
     put it inside describe block:

     describe('Group 2', () => {
     beforeEach( () => {

         cy.visit('https://youtube.com')

     });
       it.only('Test three', () => {

*/

beforeEach( () => {

  cy.visit('https://youtube.com')

})



describe('Group 1', () => { //describe ... - to organise tests in groups

  it('Test one', () => {

    cy.visit('https://youtube.com')

    cy.url()
      .should('eq', 'https://youtube.com'); //assert url

  });

  it('Test two', () => {

    cy.get('#search-input > #search', {timeout: 3000}) //wait 3s till the element will be downloaded
      .should('be.visible') //assertion

  });

});