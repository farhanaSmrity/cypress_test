import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe ('all login test', () => {

it('Login Test with valid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    //cy.get('#welcome').click()
  })

  it('Login Test with invalid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin1')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    //cy.get('#welcome').click()
  })

})