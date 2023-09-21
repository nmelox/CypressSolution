

describe("MotorK Exercise", () => {
    it("Search element", () =>{
        cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"))
        cy.visit(Cypress.env("urlApp"))
        cy.searchElement("Dog")
    })
})