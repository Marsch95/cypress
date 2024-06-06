import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Login Test 1', function(){

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.get('.oxd-userdropdown-tab').click()

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()

    })

    it('Login Test 2', function(){

        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')

    })

    it.skip('Login Test 2', function(){

        cy.visit('https://google.com')

    })
})