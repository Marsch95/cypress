/// <reference types = "cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read Files using Fixture', function(){
    cy.fixture('example.json').then((data)=> {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Read Files using ReadFile', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=> {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Write File Demo', function(){
    cy.writeFile('sample.txt', 'Hello I am Mark\n')
    cy.writeFile('sample.txt', 'I am learning Cypress', {flag: 'a+'})

})