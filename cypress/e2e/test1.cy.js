/// <reference types = "cypress"

it('Google Search',()=>{
    cy.visit('https://www.google.com/');
    cy.get('#APjFqb'), {timeout:5000}.type('Automation step by step{Enter}')
    //cy.contains('Google Search').click
    cy.contains('Videos').click
})