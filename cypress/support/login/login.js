import Login from '../../pageObject/login.cy'

const login = new Login()
const url = Cypress.env("urlApp")
const username = Cypress.env("appUser")
const password = Cypress.env("appPassword")

Cypress.Commands.add('login', ()=>{
    cy.visit(url)
    login.username().type(username)
    login.password().type(password)
})