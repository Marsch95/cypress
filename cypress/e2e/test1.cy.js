 

 it('Google Search', function(){
    cy.visit('https://google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('#APjFqb', {timeout:5000}).type('Automation step by step{Enter}')
    cy.wait(2000)
    cy.contains('Videos').click()
    //cy.contains('Google Suche').click()
 })