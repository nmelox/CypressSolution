import General from "../pageObject/general.cy"

const general = new General()

Cypress.Commands.add('visitUrl', (url) => {
    const timeout = 20000
    cy.visit(Cypress.env('urlApp') + url, { timeout })
  })

  Cypress.Commands.add('checkText', (element, text) => {
    element.then(
        ($elementText) => {
            expect($elementText.text()).equals(text)
        })
})

Cypress.Commands.add('checkTextContains', (element, text) => {
    element.then(
        ($elementText) => {
            expect($elementText.text()).contains(text)
        })
})

Cypress.Commands.add('elementIsLoaded', (element) => {
    element.should("be.visible", { timeout: 80000 })
})

Cypress.Commands.add("elementIsLoadedByLocator", (locator) => {
    locator().should("be.visible")
})

Cypress.Commands.add("elementNotExist", (locator) => {
    locator().should("not.exist")
})

Cypress.Commands.add('clickElement', (element) => {
    element.click({ timeout: 10000 })
})

Cypress.Commands.add('typeElement', (element, value, timeout = 50000) => {
    element.should('be.visible', { timeout: timeout }).type(value, { force: true })
})

Cypress.Commands.add('clearElement', (element) => {
        element.clear()
})

Cypress.Commands.add('checkModal', (title, subTitle) => {
    general.modalConfirmationBtn().should('be.enabled')
    general.modalConfirmationText().then(($modalText) => {
        expect($modalText.text()).equals(title)
    })
    general.modalConfirmationSubText().then(($modalSubText) => {
        expect($modalSubText.text()).equals(
            subTitle
        )
    })
    general.modalConfirmationBtn().click()
})

Cypress.Commands.add('checkModalContains', (title, subTitle) => {
    general.modalConfirmationBtn().should('be.enabled')
    general.modalConfirmationText().then(($modalText) => {
        expect($modalText.text()).equal(title)
    })
    general.modalConfirmationSubText().then(($modalSubText) => {
        expect($modalSubText.text()).contains(
            subTitle
        )
    })
    general.modalConfirmationBtn().click()
})
