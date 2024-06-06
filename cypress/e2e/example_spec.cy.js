// cypress/integration/example_spec.js

describe('Test trytestingthis.netlify.app', () => {
    before(() => {
      // Visit the website before each test
      cy.visit('https://trytestingthis.netlify.app/')
    })
  
    it('Should have the correct title', () => {
      cy.visit('https://trytestingthis.netlify.app/')
      cy.title().should('include', 'Try Testing This')
      cy.get('#fname').type('John')
      cy.get('#lname').type('Doe')
      cy.get('#option').select('Option 1')
      cy.get('#owc > [value="option 2"]').click()
      cy.get('[name="option1"]').check()
      cy.get('[name="option3"]').check()
      cy.get('#male').check()
      cy.get('.pop-up-alert > button').click()
      cy.wait(5000)
      cy.on('window:alert', (text) => {
        expect(text).to.contains('I am an alert box!')
      })
      cy.wait(5000)
      cy.on('window:confirm', (text) => {
        expect(text).to.contains('Press a button!')
      })
      cy.wait(5000)
            cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Test input')
        cy.get('#prompt').click()
      })

    })
  
  
  
  //   // it('Should interact with prompt box', () => {
  //   //   cy.window().then((win) => {
  //   //     cy.stub(win, 'prompt').returns('Test input')
  //   //     cy.get('#prompt').click()
  //   //   })
  //   // })
   })
  