

beforeEach(() => {
    cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"))
    cy.login()
  })

describe("Login", ()=>{
    it("With a Standard user", ()=>{
        return true
    })
})