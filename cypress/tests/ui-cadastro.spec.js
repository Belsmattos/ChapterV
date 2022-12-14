/// <reference types="cypress"  />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      // https://api.realworld.io/api/users

      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('ChapterVb')
    cy.get('[placeholder=Email]').type('ChapterVb@mail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('ChapterVb')
    cy.get('[placeholder=Email]').type('ChapterVb@mail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })
  it('Cadastro com email já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-email-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('ChapterVb')
    cy.get('[placeholder=Email]').type('ChapterVb@mail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
