/// <reference types="cypress"  />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()

    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarOFormulario()

    articles.preencherFormulario()

    articles.submeterFormulario()

    articles.verificarSeOArtigoFoiCriado()
  })
})
