import { describe } from "mocha"
import { LoginPages } from "./pages/login_pages"

const loginPage = new LoginPages()

describe ('all login test', () => {

it.skip('Login Test with valid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
  })

  it('Login Test with invalid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin1')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
  })

})