const constantTime = 1000

class login {
    username(){
        //return cy.get('[data-test="username"]',{timeout: constantTime})
        return cy.get('#email')
    }
    password(){
        //return cy.get('[id="password"]')
        return cy.get('#password')
    }
    btnLogin(){
        //return cy.get('[id="login-button"]')
        return cy.get('.btn-primary')
    }
}

export default login