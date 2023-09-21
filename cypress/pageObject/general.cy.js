const constantTime = 10000

class general {
    
    modalConfirmationText() {
        return cy.get('#swal2-title', { timeout: constantTime * 4})
      }
    
      modalConfirmationSubText() {
        return cy.get('#swal2-content', { timeout: constantTime * 20})
      }
    
      modalConfirmationBtn() {
        return cy.get('.swal2-confirm', { timeout: constantTime * 20})
      }
    
      modalClose() {
        return cy.get('.modal-close', { timeout: constantTime })
      }
}