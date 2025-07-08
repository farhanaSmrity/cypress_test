it('assertion demo', () => {

    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .and('be.enabled')

    expect(true).to.be.true
    assert.equal('4', '4', 'not equal')
    assert.strictEqual('4', '4', 'not equal')
    


  })