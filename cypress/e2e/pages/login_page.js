export class LoginPage{

    user_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    click_button = '.oxd-button'


    enterUsername(username) {
        cy.get(this.user_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.click_button).click()
    }
}