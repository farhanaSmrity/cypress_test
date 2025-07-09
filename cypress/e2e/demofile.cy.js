/// <reference types = "cypress"

before(function()  {
    cy.fixture('example.json').as('test_data')
 })
 
 
 it('Read file using fixture', () => {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
    //cy.log(this.test_data.name)
  })

  it('Read file using readfile()', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
  })

  it('write file demo', () => {
    cy.writeFile('sample.txt','hello i am smrity\n')
    cy.writeFile('sample.txt','pretty little baby',{flag:'a+'})
  })
