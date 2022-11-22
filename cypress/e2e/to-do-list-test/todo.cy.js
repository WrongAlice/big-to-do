/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://big-to-do.vercel.app/')
  })

  it('displays Title', () => {
    cy.get('h1').should('have.text', ' to-do list')
 
  })

it('displays add button', () => {
  cy.get('button').contains('Add Item').should('be.visible')
})
  

it('lets you type into the input field', () => {
  cy.get('input').type('hello world').should('have.value', 'hello world')
})


  it('displays clear button', () => {
    cy.get('button').contains('Clear Item')
  })


   it('can add new todo items', () => {
  
    const newItem = 'visit granny'

    
    cy.get('input').type(newItem)
    cy.get('button').contains('Add Item').click()
    cy.get('div').contains(newItem)
  })

  it('can clear completed todo items', () => {
    const newItem = 'visit granny'
    cy.get('input').type(newItem)
    cy.get('button').contains('Add Item').click()
    cy.get('div').contains(newItem).click()
    cy.get('button').contains('Clear Item').click()
    cy.get('div').should('not.contain', newItem)
  })
})



