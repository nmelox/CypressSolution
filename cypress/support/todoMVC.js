import todomvc from "../pageObject/todoMVC.cy"

const todo = new todomvc ()

Cypress.Commands.add("addElement", (element) =>{
    cy.clickElement(todo.searchBar())
    cy.typeElement(todo.searchBar(), "Cats")
    cy.typeElement(todo.searchBar(), '{enter}')
})